import React from 'react'

const ItemFortune = (props) => {
    const fortune = props.children.substr(0, 30)

    return (
        <li className="d-flex flex-row" onClick={props.onClick}>
            <div className="flex-column col-2 text-right p-0 pr-2">{props.index}</div>
            <div className="flex-column">{fortune}</div>
        </li>
    )
}

export default ItemFortune
