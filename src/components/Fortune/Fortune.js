import React from 'react'
import './Fortune.css'

const Fortune = (props) => {
    const fortune = props.fortune
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br/>')

    return (
        <p id="fortune"
             className="container mt-4 p-4 rounded"
             onClick={props.onClick}
             dangerouslySetInnerHTML={{ __html: fortune}}>
        </p>
    )
}

export default Fortune
