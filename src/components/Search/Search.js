import React, {useEffect} from 'react'
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import {fortuneUrl} from "../../services/get-fortune";
import {useParams} from "react-router-dom";
import Pagination from "./Pagination";

const mapApiToIndex = {
    'https://debian-12.api.fortune.luka.sh': 'fortune-debian-12',
    'https://debian-11.api.fortune.luka.sh': 'fortune-debian-11',
    'https://debian-10.api.fortune.luka.sh': 'fortune-debian-10',
}

const getIndexName = () => { return mapApiToIndex[fortuneUrl] }

const SEARCH_API = 'https://search.api.fortune.luka.sh/api/v1/search'

const Search = (props) => {

    const [searchResults, setSearchResults] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [limit, setLimit] = React.useState(10)
    const [total, setTotal] = React.useState(0)
    const [searchTerm, setSearchTerm] = React.useState("")

    const params = useParams()

    useEffect(() => {
        setSearchTerm(params.query || '')
        if (searchTerm !== '') {
            doRequest()
        }
    }, []);

    const setPageWrapper = (page) => {
        console.log('setPageWrapper', page)
        console.log('total pages', Math.ceil(total / limit))

        if (page < 0 || page > Math.ceil(total / limit)) {
            return
        }

        setPage(page)
        doRequest()
    }

    const doRequest = async () => {
        const query = encodeURIComponent(searchTerm + ' _index:' + getIndexName())
        const res = await fetch(SEARCH_API + `?q=${query}&page=${page}&limit=${limit}`)
        const json = await res.json()

        setTotal(json.hits.total.value || 0)
        setSearchResults(json.hits.hits.map(item => item._source) || [])
    }

    return (
        <div className="row justify-content-center">
            <div className="container-fluid bg-warning row justify-content-center">
                <div className="col-lg-8 text-danger">
                    <i className="fas fa-bomb"></i>
                    &nbsp;<strong>Warning</strong>&nbsp;
                    <span className="">This search form is still in its alpha stage and is not fully operational.</span>
                </div>
            </div>
            <div className="col-lg-8 mt-5 mb-5">
                <SearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setPage={setPage}
                    doRequest={doRequest}
                />
                <SearchResults total={total} searchResults={searchResults}/>
                <Pagination page={page} limit={limit} total={total} setPage={setPageWrapper}/>
            </div>
        </div>
    )
}

export default Search
