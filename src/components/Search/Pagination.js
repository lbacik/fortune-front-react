import React from 'react'
import './Pagination.css'

const isNumber = value => typeof value === 'number' && isFinite(value)

const Pagination = (props) => {

    const lastPage = Math.ceil(props.total / props.limit);
    const currentPageFromOne = props.page + 1;

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= lastPage; i++) {

            if (i === 1 || i === lastPage) {
                pageNumbers.push(i);
                continue
            }

            if (i === currentPageFromOne - 3 || i === currentPageFromOne + 3) {
                pageNumbers.push('...');
            }

            if (i > currentPageFromOne - 3 && i < currentPageFromOne + 3) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination mt-2">
            <ul className="pagination">
                <li><a href='#' onClick={() => {props.setPage(props.page - 1)}}>Previous</a></li>
                {generatePageNumbers().map((pageNumber, index) => {

                    if (isNumber(pageNumber) === false) {
                        return <li key={index}>...</li>
                    }
                    return (
                        <li
                            key={index}
                            className={pageNumber === currentPageFromOne ? 'active' : ''}
                        >
                            <a href="#" onClick={() => props.setPage(pageNumber - 1)}>{pageNumber}</a>
                        </li>
                    )
                })}
                <li><a href='#' onClick={() => {props.setPage(props.page + 1)}}>Next</a></li>
            </ul>
        </div>
    )
}

export default Pagination
