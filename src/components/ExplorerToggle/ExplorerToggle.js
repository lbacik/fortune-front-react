import React from 'react'
import './ExplorerToggle.css'
import { connect } from 'react-redux'

const ExplorerToggle = (props) => {
    let classes = ['px-2']

    let button
    if (props.explorerShow === true) {
        button = '<<< close'
    }  else {
        button = '>>> explore'
    }

    return (
        <div id="explorerToggle" className={classes.join(' ')} onClick={props.onExploreToggle}>{button}</div>
    )
}

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onExploreToggle: () => dispatch({type: 'EXPLORER_TOGGLE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerToggle)
