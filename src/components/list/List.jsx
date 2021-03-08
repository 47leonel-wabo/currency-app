import React, {Component} from "react";
import {API_BASE_URL, handleResponse} from "../../utils/Helpers";
import Pagination from "../pagination/Pagination";
import CurrencyTable from "../currency_table/CurrencyTable";

class List extends Component {
    // class' data state
    state = {
        loading: false,
        currencies: [],
        error: null,
        page: 1,
        totalPages: 0,
    };

    // Lifecycle hook, runs when component is mounted
    componentDidMount() {
        this.fetchRemoteData()
    }

    fetchRemoteData() {
        this.setState({
            loading: true,
        });

        const {page} = this.state
        fetch(`${API_BASE_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const {currencies, totalPages} = data
                this.setState({
                    currencies,
                    totalPages,
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

    // Handle click selection
    handleCurrencySelection = (currency) => {
        console.log(currency)
    }

    // Handle pagination event
    handlePagination = (direction) => {
        let nextPage = this.state.page
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1
        this.setState({
                page: nextPage,
            },
            // Run once page is updated, then fetch data of the new page
            () => {
                this.fetchRemoteData()
            })
    }

    render() {
        // Destructuring state
        const {loading, error, currencies, page, totalPages} = this.state

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
                <CurrencyTable
                    currencies={currencies}
                    renderPercentArrow={this.renderPercentageArrow}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePagination={this.handlePagination}
                />
            </div>
        );
    }
}

export default List;
