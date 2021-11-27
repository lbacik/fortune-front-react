import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Fortune.css'
import axios from "axios"

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'http://localhost:8080'

class Fortune extends Component {

    getFortune() {
        axios.get(`${fortuneUrl}/fortune/`)
            .then(res => {
                this.props.setFortune(
                    {
                        fortune: res.data.fortune,
                        file: res.data.file || undefined,
                        index: res.data.index || undefined,
                    }
                )
            })
    }

    transformFortuneStr() {
        return this.props.fortune
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br/>')
    }

    componentDidMount() {
        if (this.props.fortune === undefined) {
            this.getFortune()
        }
    }

    render() {

        const fortune = this.props.fortune !== undefined ? this.transformFortuneStr() : ''

        const fileLink = (
            <span
                className="link"
                onClick={() => this.props.onShowFileInExplorer(this.props.file, this.props.index)}>
                {this.props.file}
            </span>
        )

        return (
            <div className="container mt-5 sticky-top">
                <p id="fortune"
                   className="p-4 rounded"
                   onClick={() => this.getFortune()}
                   dangerouslySetInnerHTML={{__html: fortune}}>
                </p>
                <div className="source pl-4 text-right text-black-50">
                    [file: {fileLink} | index: {this.props.index}]
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        fortune: state.fortune.fortune,
        file: state.fortune.file,
        index: state.fortune.index,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowFileInExplorer: (file, index) => dispatch({type: 'SHOW_FILE', file: file, index: index}),
        setFortune: (fortune) => dispatch({type: 'SET_FORTUNE', payload: fortune}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fortune)
