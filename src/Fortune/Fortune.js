import React from 'react'
import './Fortune.css'

const Fortune = (props) => {
    const fortune = props.fortune
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br/>')

    return (
        <div id="fortune"
             onClick={props.onClick}
             dangerouslySetInnerHTML={{ __html: fortune}}>
        </div>
    )
}

export default Fortune
