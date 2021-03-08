import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <Link
                className="ml-3"
                style={{ color: '#ccc' }}
                to="/currencies">
                <i className="fa fa-home fa-2x"/> Home
            </Link>
            <div style={{fontSize: '42px', color: 'blueviolet', textAlign: 'center'}}>
                <i
                    className="fa fa-ban fa-4x"
                /> <br/>
                <span>404</span>
                <span className="ml-4">Element Not Found!</span>
            </div>
        </div>
    )
}

export default NotFound