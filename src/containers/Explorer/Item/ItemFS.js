import React from 'react'
import { connect } from 'react-redux'

const ItemFS = (props) => {
    const classes = ['px-2', 'rounded']
    classes.push(...props.additionalClasses)

    if (props.children === props.file) {
        classes.push('hit')
    }

    return (
        <li className={classes.join(' ')} onClick={props.onClick}>{props.children}</li>
    )
}

const mapStateToProps = state => {
    return {
        file: state.fortune.file,
    }
}

export default connect(mapStateToProps)(ItemFS)
