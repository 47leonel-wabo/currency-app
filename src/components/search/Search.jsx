import React from 'react'
import {API_BASE_URL, handleResponse} from "../../utils/Helpers";
import './Search.css'
import {withRouter} from "react-router";

class Search extends React.Component {
    state = {
        searchQuery: '',
        searching: false,
        searchResult: []
    }
    render = () => {

        const {searchQuery, searching, searchResult} = this.state

        return (
            <div className="col-sm-6 m-auto">
                <div className="input-group mb-3">
                    {/*<input*/}
                    {/*    ref={(input) => this.searchQuery = input}/>*/}
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search"/></span>
                    </div>
                    <input
                        className="col-sm"
                        type="text"
                        placeholder="Currency name"
                        value={searchQuery}
                        onChange={this.handleFormInput}/>
                    {searching && searchQuery &&
                    <div className="spinner-grow spinner-grow-sm mt-2 ml-2" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    {this.renderSearchResult(searchResult, searchQuery, searching)}
                </div>
            </div>
        )
    }

    renderSearchResult = (results, sq, srch) => {
        // If there is no searching text, into the input field
        if (!sq) {
            return ''
        }

        // If there is a searching text
        if (results.length > 0) {
            return (
                <div className="results">
                    {results.map(currency => (
                        <div className="searList"
                            style={{ cursor: 'pointer', margin: '2px' }}
                            key={currency.id}
                            onClick={() => this.handleResultSelection(currency)}
                        >
                            {currency.name} ({currency.symbol})
                            {/*<hr />*/}
                        </div>
                    ))}
                </div>
            )
        }

        // If no more searching
        if (!srch) {
            return (
                <div>
                    No result found!
                </div>
            )
        }
    }

    handleResultSelection(currency) {
        const {history} = this.props
        this.setState({searchResult: [], searchQuery: ''}, history.push(`/currency/${currency.id}`))

    }

    // handleFormSubmission = ($event) => {
    //     $event.preventDefault()
    //     console.log(this.state.searchQuery)
    // }

    handleFormInput = ($event) => {
        const searchQuery = $event.target.value

        this.setState({
            searchQuery
        })
        if (!searchQuery) {
            return '';
        }
        if (searchQuery) {
            this.setState({
                searching: true,
            })
            fetch(`${API_BASE_URL}/autocomplete?searchQuery=${searchQuery}`)
                .then(handleResponse)
                .then((data) => {
                    console.log('Success', data);
                    this.setState({
                        searching: false,
                        searchResult: data
                    })
                })
                .catch((error) => {
                    console.log('Error', error);
                    this.setState({
                        searching: false,
                    })
                });
        }

    }
}

export default withRouter(Search)