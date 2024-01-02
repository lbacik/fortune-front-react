import React from 'react'
import Aux from '../../hoc/Aux'

const Main = (props) => (
    <Aux>
        <main id="main">
            {props.children}
        </main>
    </Aux>
)

export default Main
