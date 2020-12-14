import React from 'react'

const ExplorerToggle = (props) => (
    <div onClick={props.onClick}>{props.explorerShow ? '[X]' : '[O]'}</div>
)

export default ExplorerToggle