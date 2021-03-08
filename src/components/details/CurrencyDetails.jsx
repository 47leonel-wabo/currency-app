import React from 'react'

class CurrencyDetails extends React.Component {
    state = {
        currency: {

        }
    }
    render() {
        return (
            <div className="container">
                <div
                    className="shadow-sm col-sm-6 col-lg-6 m-auto"
                    style={{ backgroundColor: '#f5f5f5' }}>
                    <span>Currency Details</span>
                </div>
            </div>
        )
    }
}

export default CurrencyDetails