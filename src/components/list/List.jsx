import React, {Component} from "react";

class List extends Component {
    state = {
        loading: false,
        currencies: [],
        error: null,
    };

    componentDidMount() {
        this.setState({
            loading: true,
        });
        fetch("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20")
            .then((response) => {
                return response.json().then((json) => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
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

    render() {
        if (this.state.loading) {
            return (
                <div
                    style={{textAlign: "center", fontSize: "24px", color: "blueviolet"}}
                >
                    Loading...
                </div>
            );
        }
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Change Percentage (24H)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.currencies.map((currency) => {
                        return (
                            <tr key={currency.rank}>
                                <td>{currency.rank}</td>
                                <td>{currency.name}</td>
                                <td>{currency.price}</td>
                                <td>{currency.marketCap}</td>
                                <td>{currency.percentChange24h}</td>
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
