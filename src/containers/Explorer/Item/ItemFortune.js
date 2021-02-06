import React from 'react'
import { connect } from 'react-redux'

const ItemFortune = (props) => {
    const fortune = props.children.substr(0, 30)
    const classes = ['d-flex', 'flex-row', 'rounded']

    if (props.file === props.fortune_file && props.index === props.fortune_index) {
        classes.push('hit')
    }

    return (
        <li className={classes.join(' ')} style={{'fontSize': 'smaller'}} onClick={props.onClick}>
            <div className="flex-column col-2 text-right p-0 pr-2">{props.index}</div>
            <div className="flex-column">{fortune}</div>
        </li>
    )
}

const mapStateToProps = state => {
    return {
        fortune_index: state.fortune.index,
        fortune_file: state.fortune.file,
    }
}

export default connect(mapStateToProps)(ItemFortune)
