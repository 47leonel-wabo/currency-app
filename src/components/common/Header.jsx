import React, {Component} from "react";
import Search from "../search/Search";

class Header extends Component {
    state = {};

    render() {
        return (
            <div
                className="container p-4">
                <h1>{this.props.title}</h1>
                <Search />
            </div>
        );
    }
}

export default Header;
