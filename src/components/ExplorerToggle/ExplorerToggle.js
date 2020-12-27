import React from 'react'

const ExplorerToggle = (props) => (
    <div onClick={props.onClick}>{props.explorerShow ? '[ --- close --- ]' : '[ > explore < ]'}</div>
)

export default ExplorerToggle
