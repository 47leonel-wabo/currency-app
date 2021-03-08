import React from 'react'
import PropTypes from 'prop-types'

const Pagination = (props) => {
    const {page, totalPages, handlePagination} = props
    return (
        <div
            style={{textAlign: 'center'}}>
            <button
                className={page <= 1 ? "btn btn-secondary btn-sm mr-2" : "btn btn-primary btn-sm mr-2"}
                onClick={() => handlePagination('prev')}
                disabled={page <= 1}
            >&larr;</button>
            <span>Page: <b>{page}</b> of <b>{totalPages}</b></span>
            <button
                className={page === totalPages ? "btn btn-secondary btn-sm ml-2" : "btn btn-primary btn-sm ml-2"}
                onClick={() => handlePagination('next')}
                disabled={page === totalPages}
            >&rarr;</button>
        </div>
    )
}

// Constraining state data elements
Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePagination: PropTypes.func.isRequired
}

export default Pagination