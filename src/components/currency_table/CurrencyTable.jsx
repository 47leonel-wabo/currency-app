import React from 'react'
import {withRouter} from "react-router"

const CurrencyTable = (props) => {
    const {currencies, renderPercentArrow, history} = props
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Rank</th>
                <th>Crypto-currency</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>(24H) Change</th>
            </tr>
            </thead>
            <tbody>
            {currencies.map((currency) => {
                return (
                    <tr key={currency.id}
                        onClick={() => history.push(`/currency/${currency.id}`)}
                        style={{cursor: 'pointer'}}>
                        <td>{currency.rank}</td>
                        <td>{currency.name}</td>
                        <td>$ {currency.price}</td>
                        <td>$ {currency.marketCap}</td>
                        {/* First, we processed 'percentchange24h', in order to format clearly data */}
                        <td>{renderPercentArrow(currency.percentChange24h)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default withRouter(CurrencyTable)