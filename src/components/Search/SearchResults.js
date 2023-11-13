import React from 'react'
import './SearchResults.css'

const SearchResults = (props) => {

    const Results = () => {
        return props.searchResults.map((item, index) => (
            <div key={index} className="col-lg-11">
                <div className="mt-2 mb-4">
                    <span className="result-fortune font-italic">
                        {item.fortune.substring(0, 200)}
                        {item.fortune.length > 200 ? '...' :  ''}
                    </span>
                    <span className="text-secondary font-weight-light file-link">
                        (file: <a href={`/${item.file}/${item.index}`}>{item.file}:{item.index}</a>)
                    </span>
                </div>
            </div>
        ))
    }

    return (
        <div className="mt-2 row justify-content-center">
            <div className="total col-11 p-3 text-right">found: <strong>{props.total}</strong> fortune(s)</div>
            <Results />
        </div>
    )
}

export default SearchResults
