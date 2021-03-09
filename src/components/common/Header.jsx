import React, {Component} from "react";
import Search from "../search/Search";
import {withRouter} from "react-router";

class Header extends Component {
    state = {};

    render() {
        const {history} = this.props
        return (
            <div
                className="container p-4">
                <h1
                    style={{cursor: 'pointer'}}
                    onClick={() => history.push('/currencies')}
                >{this.props.title}</h1>
                <Search/>
            </div>
        );
    }
}

export default withRouter(Header);
