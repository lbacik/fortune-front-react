import React from 'react'

const ItemFortune = (props) => {
    const fortune = props.children.substr(0, 30)

    return (
        <div className="item-fortune" onClick={props.onClick}>
            <div className='index'>{props.index}</div>
            <div className='fortune'>{fortune}</div>
        </div>
    )
}

export default ItemFortune
