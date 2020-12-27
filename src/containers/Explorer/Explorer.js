import React, { Component } from 'react'
import './Explorer.css'
import ItemFS from './Item/ItemFS'
import ItemFortune from "./Item/ItemFortune"
import axios from "axios"

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'http://localhost:8080/fortune'

class Explorer extends Component  {

    ITEM_PATH_UP = '.. (up)'

    LIST_TYPE_PATH = 'path'
    LIST_TYPE_FILE = 'file'

    state = {
        root: fortuneUrl,
        path: '',
        list: [],
        listType: this.LIST_TYPE_PATH,
    }

    getList(item) {

        let newListType = this.LIST_TYPE_PATH
        let newPath = this.state.path

        if (item === this.ITEM_PATH_UP) {
            newListType = this.LIST_TYPE_PATH
            newPath = ''
        } else if (this.state.listType === this.LIST_TYPE_PATH && item.slice(-1) === '/') {
            newListType = this.LIST_TYPE_PATH
            newPath = [this.state.path, item].join('/')
        } else if (this.state.path === '' && item !== '') {
            newListType = this.LIST_TYPE_FILE
            newPath = [this.state.path, item].join('/')
        } else if (this.state.path !== '' && this.state.listType === this.LIST_TYPE_PATH) {
            newListType = this.LIST_TYPE_FILE
            newPath = [this.state.path, item].join('/')
        }

        const url = `${[this.state.root, newPath].join('/')}?explore`

        axios.get(`${url}`)
            .then(res => {
                this.setState({
                    path: newPath,
                    list: res.data,
                    listType: newListType,
                })
            })
    }

    onClickHandler(item) {
        this.getList(item)
    }

    componentDidMount() {
        this.getList('')
    }

    createItemFS(item) {
        return (
            <ItemFS key={item}
                    onClick={() => this.onClickHandler(item)}
            >{item}</ItemFS>
        )
    }

    createItemFortune(item, index) {
        return (
            <ItemFortune
                key={index}
                index={index}
                onClick={() => this.props.fortuneCallback(item)}
            >{item}</ItemFortune>
        )
    }

    render() {
        const items = this.state.list.map((item, index) => {
            if (this.state.listType === this.LIST_TYPE_PATH) {
                return this.createItemFS(item)
            } else {
                return this.createItemFortune(item, index)
            }
        })

        let up = null
        if (this.state.path !== '') {
            up = this.createItemFS(this.ITEM_PATH_UP)
        }

        return (
            <ul className="explorer p-2 rounded">
                {[up, ...items]}
            </ul>
        )
    }
}

export default Explorer