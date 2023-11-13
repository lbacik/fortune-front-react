import React from 'react'

const SearchForm = (props) => {

    return (
        <div className="row justify-content-center">
            <input
                type="text"
                className="form-control col-10 float-left"
                placeholder="Search"
                value={props.searchTerm}
                onChange={(e) => {props.setSearchTerm(e.target.value)}}
            />
            <button
                className="btn btn-primary ml-2 pl-3 pr-3"
                onClick={() => {props.doRequest(); props.setPage(0)}}
            >Search</button>
        </div>
    )
}

export default SearchForm
