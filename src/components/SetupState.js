import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { getFortune } from '../services/get-fortune'

function SetupState(props) {

    const params = useParams()

    useEffect(() => {

        getFortune(
            (fortune) => props.setFortune(
                fortune.fortune, fortune.file, fortune.index
            ),
            params.dbFile,
            params.dbFileIndex
        )

    }, [])

    return null
}

const mapStateToProps = state => {
    return {
        fortune: state.fortune,
        // path: state.explorer.path,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // changePath: (path) => dispatch({type: 'CHANGE_EXPLORER_PATH', path: path}),
        setFortune: (fortune, file, index) => dispatch(
            {type: 'SET_FORTUNE', payload: {fortune: fortune, file: file, index: index}}
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupState)