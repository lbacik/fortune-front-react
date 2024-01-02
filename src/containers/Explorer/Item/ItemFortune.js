import React from 'react'
import { connect } from 'react-redux'

const ItemFortune = (props) => {
    const fortune = props.children.substr(0, 30)
    const classes = ['px-4', 'd-flex', 'flex-row', 'rounded', 'item-fortune']

    if (props.file === props.fortune_file && props.index === props.fortune_index) {
        classes.push('hit')
    }

    return (
        <li className={classes.join(' ')} style={{'fontSize': 'smaller'}} onClick={props.onClick}>
            <div className="flex-column pe-2 text-right item-fortune-index">{props.index}</div>
            <div className="flex-column item-fortune-text">{fortune}</div>
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
