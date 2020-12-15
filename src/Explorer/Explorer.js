import React, { Component } from 'react'
import './Explorer.css'
import ItemFS from './Item/ItemFS'
import ItemFortune from "./Item/ItemFortune"
import axios from "axios"

class Explorer extends Component  {

    ITEM_PATH_UP = '.. (up)'

    LIST_TYPE_PATH = 'path'
    LIST_TYPE_FILE = 'file'

    state = {
        root: 'http://localhost:8080/fortune',
        path: '',
        list: [],
        listType: this.LIST_TYPE_PATH,
    }

    getList(item) {

        console.log(`ITEM: ${item}`)

        let newListType = this.LIST_TYPE_PATH
        let newPath = this.state.path

        if (item === this.ITEM_PATH_UP) {
            newListType = this.LIST_TYPE_PATH
            newPath = ''
            console.log('UP')
        } else if (this.state.listType === this.LIST_TYPE_PATH && item.slice(-1) === '/') {
            newListType = this.LIST_TYPE_PATH
            newPath = [this.state.path, item].join('/')
            console.log(`new path 1: ${newPath}`)
        } else if (this.state.path === '' && item !== '') {
            newListType = this.LIST_TYPE_FILE
            newPath = [this.state.path, item].join('/')
            console.log(`new path 2: ${newPath}`)
        } else if (this.state.path !== '' && this.state.listType === this.LIST_TYPE_PATH) {
            newListType = this.LIST_TYPE_FILE
            newPath = [this.state.path, item].join('/')
            console.log(`new path 3: ${newPath}`)
        }

        const url = `${[this.state.root, newPath].join('/')}?explore`

        console.log(`LIST: ${url}`)
        console.log(`LIST Type: ${newListType}`)

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
            <div id="explorer">{[up, ...items]}</div>
        )
    }
}

export default Explorer