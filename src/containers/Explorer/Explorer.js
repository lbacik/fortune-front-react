import React, { Component } from 'react'
import './Explorer.css'
import ItemFS from './Item/ItemFS'
import ItemFortune from "./Item/ItemFortune"
import axios from "axios"
import { connect } from 'react-redux'

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'http://localhost:8080'

class Explorer extends Component  {

    ITEM_PATH_UP = '.. (up)'

    LIST_TYPE_PATH = 'path'
    LIST_TYPE_FILE = 'file'

    state = {
        root: `${fortuneUrl}/fortune`,
        path: undefined,
        list: [],
        listType: this.LIST_TYPE_PATH,
    }

    getList(item) {

        let newListType = this.LIST_TYPE_PATH

        if (item === this.ITEM_PATH_UP) {
            newListType = this.LIST_TYPE_PATH
            this.props.changePath('') // FIXME
        } else if (item !== '' && item.slice(-1) !== '/') {
            newListType = this.LIST_TYPE_FILE
        }

        const url = `${[this.state.root, this.props.path].join('/')}?explore`

        axios.get(`${url}`)
            .then(res => {
                this.setState({
                    path: this.props.path,
                    list: res.data,
                    listType: newListType,
                })
            })
    }

    componentDidMount() {
        this.getList(this.props.path)
    }

    createItemFS(item, additionalClasses = []) {
        return (
            <ItemFS key = {item}
                    onClick = {() => this.props.changePath(item)}
                    additionalClasses = {additionalClasses}
            >{item}</ItemFS>
        )
    }

    createItemFortune(item, index) {
        return (
            <ItemFortune
                key={index}
                index={index}
                file={this.state.path}
                onClick={() => this.props.setFortune(item, this.state.path, index)}
            >{item}</ItemFortune>
        )
    }

    updateList() {
        if (this.props.path !== this.state.path) {
            this.getList(this.props.path)
        }
    }

    render() {

        this.updateList()

        const items = this.state.list.map((item, index) => {
            if (this.state.listType === this.LIST_TYPE_PATH) {
                return this.createItemFS(item)
            } else {
                return this.createItemFortune(item, index)
            }
        })

        let up = null
        if (this.props.path !== '') {
            up = this.createItemFS(this.ITEM_PATH_UP, ['up', 'pl-1'])
        }

        return (
            <ul className="explorer p-2 rounded">
                <li className="path text-right rounded">{this.props.path}</li>
                {[up, ...items]}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        fortune: state.fortune,
        path: state.explorer.path,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetExplorer: () => dispatch({type: 'UNSET_EXPLORER'}),
        changePath: (path) => dispatch({type: 'CHANGE_EXPLORER_PATH', path: path}),
        setFortune: (fortune, file, index) => dispatch(
            {type: 'SET_FORTUNE', payload: {fortune: fortune, file: file, index: index}}
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explorer)
