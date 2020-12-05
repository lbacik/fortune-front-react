import React from 'react'
import getFortune from './FortuneClient'

const Fortune = () => {
    return <p> {getFortune()} </p>
}

export default Fortune
