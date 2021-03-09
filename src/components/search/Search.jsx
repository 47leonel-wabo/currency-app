import React from 'react'
import {API_BASE_URL, handleResponse} from "../../utils/Helpers";

class Search extends React.Component {
    state = {
        searchQuery: ''
    }
    render = () => {
        return (
            <div className="col-sm-8 m-auto">
                <div className="input-group mb-3">
                    {/*<input*/}
                    {/*    className="col-sm"*/}
                    {/*    type="text"*/}
                    {/*    ref={(input) => this.searchQuery = input}/>*/}
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search"/></span>
                    </div>
                    <input
                        className="col-sm"
                        type="text"
                        onChange={this.handleFormInput}/>
                </div>
            </div>
        )
    }
    // handleFormSubmission = ($event) => {
    //     $event.preventDefault()
    //     console.log(this.state.searchQuery)
    // }

    handleFormInput = ($event) => {
        const inputValue = $event.target.value
        console.log(this.state)

        this.setState({
            searchQuery: inputValue
        })
        if (!inputValue) {
            return '';
        }
        if (inputValue) {
            fetch(`${API_BASE_URL}/autocomplete?searchQuery=${inputValue}`)
                .then(handleResponse)
                .then((data) => {
                    console.log('Success', data);
                })
                .catch((error) => {
                    console.log('Error', error);
                });
        }

    }
}

export default Search