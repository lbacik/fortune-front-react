import React from 'react'

const ItemFS = (props) => (
    <li className="px-2 rounded" onClick={props.onClick}>{props.children}</li>
)

export default ItemFS
