import React, { Component } from 'react'
import './Explorer.css'
import ItemFS from './Item/ItemFS'
import ItemFortune from "./Item/ItemFortune"
import axios from "axios"
import { connect } from 'react-redux'
import { fortuneUrl } from '../../services/get-fortune'


class Explorer extends Component  {

    ITEM_PATH_UP = '.. (up)'

    LIST_TYPE_PATH = 'path'
    LIST_TYPE_FILE = 'file'

    state = {
        root: `${fortuneUrl}`,
        path: '',
        list: [],
        listType: this.LIST_TYPE_PATH,
    }

    basename(path) {
        return path.split('/').reverse()[0]
    }

    basenameUp(path) {
        const parent = path.split('/').slice(0, -1).join('/')
        return parent == '' ? parent : parent + '/'
    }

    getList(path) {
        let newListType = this.LIST_TYPE_PATH

        if (path !== '' && path.slice(-1) !== '/') {
            newListType = this.LIST_TYPE_FILE
        }

        const url = `${[this.state.root, path].join('/')}?explore=true`

        axios.get(`${url}`)
            .then(res => {

                let result = res.data

                if (newListType == this.LIST_TYPE_PATH) {

                    const folders = []
                    const files = []

                    res.data.filter((e) => e.slice(-1) == '/' ? folders.push(e) : files.push(e))

                    folders.sort()
                    files.sort()

                    result = folders.concat(files)
                }

                this.setState({
                    path: path,
                    list: result,
                    listType: newListType,
                })
            })
    }

    componentDidMount() {
        this.getList(this.props.path)
    }

    createUpItem(path) {
        return (
            <ItemFS key = 'UP'
                    onClick = {() => this.props.changePath(path)}
                    additionalClasses = {['up', 'pl-1']}
            >{this.ITEM_PATH_UP}</ItemFS>
        )
    }

    createItemFS(item, additionalClasses = []) {
        return (
            <ItemFS key = {item}
                    name = {item}
                    onClick = {() => this.props.changePath([this.state.path, item].join(''))}
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
            up = this.createUpItem(this.basenameUp(this.state.path))
        }

        return (
            <ul className="explorer p-2 rounded">
                <div className="path text-center mb-2">{this.state.path}</div>
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
