import React from 'react'

class CurrencyDetails extends React.Component {
    state = {
        cryptocurrency: {},
        error: null,
        loading: false,
    }

    componentDidMount() {
        this.fetchData('bitcoin')
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
                console.log(data)
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
        if (loading){
            return <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto">
                    <span className="p-3" style={{ color: 'blueviolet' }}>Loading...</span>
                </div>
            </div>
        }
        if (error){
            return <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto">
                    <span className="p-3" style={{ color: 'blueviolet' }}>{error.errorMessage}</span>
                </div>
            </div>
        }
        return (
            <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto">
                    <span className="p-3">{cryptocurrency.name}</span>
                </div>
            </div>
        )
    }
}

export default CurrencyDetails