import React from 'react'
import Aux from '../../hoc/Aux'

const Layout = (props) => (
    <Aux>
        <main role="main">
            {props.children}
        </main>
    </Aux>
)

export default Layout
