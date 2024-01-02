import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Fortune.css'
import { getFortune } from '../../services/get-fortune'


class Fortune extends Component {

    getFortuneWrapper() {
        getFortune((fortune) => this.props.setFortune(fortune))
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
            this.getFortuneWrapper()
        }
    }

    render() {

        const fortune = this.props.fortune !== undefined ? this.transformFortuneStr() : ''

        // const fileLink = (
        //     <span
        //         className="link"
        //         onClick={() => this.props.onShowFileInExplorer(this.props.file, this.props.index)}>
        //         {this.props.file}
        //     </span>
        // )

        return (
            <div className="container mb-4">
                <p id="fortune"
                   className="p-4 rounded d-table-cell"
                   // onClick={() => this.getFortuneWrapper()}
                   dangerouslySetInnerHTML={{__html: fortune}}>
                </p>
                <div className="source text-end">
                    <span
                        className="source-data rounded rounded-2 p-2 pt-1 pb-1 link"
                        onClick={() => this.props.onShowFileInExplorer(this.props.file, this.props.index)}
                    >
                        file: {this.props.file} | index: {this.props.index}
                    </span>
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
