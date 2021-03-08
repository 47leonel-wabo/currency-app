import React from 'react'

const Pagination = (props) => {
    const {page, totalPages, handlePagination} = props
    return (
        <div
            style={{textAlign: 'center'}}>
            <button
                className={page === 1 ? "btn btn-secondary btn-sm mr-2" : "btn btn-primary btn-sm mr-2"}
                onClick={() => handlePagination('prev')}
            >&larr;</button>
            <span>Page: <b>{page}</b> of <b>{totalPages}</b></span>
            <button
                className="btn btn-primary btn-sm ml-2"
                onClick={() => handlePagination('next')}
            >&rarr;</button>
        </div>
    )
}

export default Pagination