import React from 'react'
import { connect } from 'react-redux'

const ItemFS = (props) => {
    const classes = ['px-4', 'rounded', 'item-fs']
    classes.push(...props.additionalClasses)

    if (props.children === props.file) {
        classes.push('hit')
    }

    let label = props.children
    let folder = false

    if (props.name && props.name.slice(-1) === '/') {
        classes.push('item-folder')
        folder = true
    }

    return (
        <li className={classes.join(' ')} onClick={props.onClick}>
            {folder ? <i className="ri-folder-line"></i>:''} {label}
        </li>
    )
}

const mapStateToProps = state => {
    return {
        file: state.fortune.file,
    }
}

export default connect(mapStateToProps)(ItemFS)
