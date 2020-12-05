import {Component} from "react/cjs/react.production.min"
import getFortune from "./FortuneClient"
import React from "react"
import axios from "axios"

class FortuneComponent extends Component {

    state = {
        fortune: "",
    }

    // FORTUNE_URL = 'http://jsonplaceholder.typicode.com/posts'
    FORTUNE_URL = 'http://127.0.0.1:8080'

    componentDidMount() {
        axios.get(this.FORTUNE_URL)
            .then(res => {
                this.setState({fortune: res.data.fortune})
            })
    }

    render() {
        const fortune = this.state.fortune
        return (
            <p> {fortune} </p>
        )
    }
}

export default FortuneComponent
