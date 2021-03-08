import React, {Component} from "react";
import {API_BASE_URL, handleResponse} from "../../utils/Helpers";

class List extends Component {
    // class' data state
    state = {
        loading: false,
        currencies: [],
        error: null,
    };

    // Lifecycle hook, runs when component is mounted
    componentDidMount() {
        this.setState({
            loading: true,
        });
        fetch(API_BASE_URL.concat("/cryptocurrencies?page=1&perPage=20"))
            .then(handleResponse)
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }

    // Format percent change
    renderPercentageArrow = (percentage) => {
        if (percentage > 0) {
            return <span style={{color: 'green'}}>{percentage} % &uarr;</span>
        } else {
            return <span style={{color: 'red'}}>{percentage} % &darr; </span>
        }
    }

    render() {
        // Destructuring state
        const {loading, error, currencies} = this.state

        // Render error message, if any
        if (error) {
            return <span>{error}</span>
        }

        // Render loading component when data loading
        if (loading) {
            return (
                <div
                    style={{textAlign: "center", fontSize: "24px", color: "blueviolet"}}
                >
                    Loading...
                </div>
            );
        }

        // Render the currency list
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Crypto-currency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Change Percentage (24H)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencies.map((currency) => {
                        return (
                            <tr key={currency.id}>
                                <td>{currency.rank}</td>
                                <td>{currency.name}</td>
                                <td>$ {currency.price}</td>
                                <td>$ {currency.marketCap}</td>
                                {/* First, we processed 'percentchange24h', in order to format clearly data */}
                                <td>{this.renderPercentageArrow(currency.percentChange24h)}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
