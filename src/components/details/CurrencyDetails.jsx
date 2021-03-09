import React from 'react'
import {Link} from "react-router-dom";
import {renderPercentageArrow} from "../../utils/Helpers";

class CurrencyDetails extends React.Component {
    state = {
        cryptocurrency: {},
        error: null,
        loading: false,
        currencyId: null,
    }

    // Runs once component is mounted
    componentDidMount() {
        this.setState({
            currencyId: this.props.match.params.id
        }, () => this.fetchData(this.state.currencyId))
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // First make sure that old path is different from the new one
        if (this.props.location.pathname !== nextProps.location.pathname) {
            // Get currency id
            const newCurrencyId = nextProps.match.params.id
            // Fetching and updating with new data
            this.fetchData(newCurrencyId)
        }
    }

    fetchData = (id) => {
        this.setState({
            loading: true
        })
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies/${id}`)
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({
                    cryptocurrency: data,
                    loading: false
                })
                // console.log(data)
            })
            .catch((error) => {
                this.setState({
                    error,
                    loading: false
                })
            });
    }

    render() {
        const {loading, cryptocurrency, error} = this.state
        if (loading) {
            return <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto">
                    <span className="p-3" style={{color: 'blueviolet'}}>Loading...</span>
                </div>
            </div>
        }
        if (error) {
            return <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto">
                    <span className="p-3" style={{color: 'blueviolet'}}>{error.errorMessage}</span>
                </div>
            </div>
        }
        return (<>
                <div className="container">
                    <Link
                        className="ml-3"
                        style={{color: '#ccc'}}
                        to="/currencies">
                        <i className="fa fa-home fa-2x"/> Home
                    </Link>
                    <div
                        className="shadow-sm col-sm-6 col-lg-6 m-auto p-3">
                        <span className="p-3">{cryptocurrency.name}</span>
                        (<b>{cryptocurrency.symbol}</b>)
                        <hr/>
                        <div>
                            <b>Rank</b>: <span className="badge badge-pill badge-info m-2"
                                               style={{fontSize: '20px'}}>{cryptocurrency.rank}</span>
                        </div>
                        <div>
                            <b>Price</b>: <span className="badge badge-pill badge-warning m-2"
                                                style={{fontSize: '20px'}}>${cryptocurrency.price}</span>
                        </div>
                        <div className="mt-2">
                            <b>Change (24h)</b>: <span
                            className="mt-3">{renderPercentageArrow(cryptocurrency.percentChange24h)}</span>
                        </div>
                        <div className="mt-2">
                            <b>Total Supplied</b>: <span className="mt-3">$ {cryptocurrency.totalSupply}</span>
                        </div>
                        <div className="mt-2">
                            <b>Volume</b>: <span className="mt-3">$ {cryptocurrency.volume24h}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrencyDetails