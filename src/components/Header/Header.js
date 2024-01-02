import React from 'react'
import {connect} from "react-redux";

const Header = (props) => {

    console.log('props', props)

    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent ">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html">fortune</a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto" href="/">Random Fortune</a></li>
                        {/*<li><a className="nav-link scrollto" href="/search">Search</a></li>*/}
                        <li><a className={props.explorerShow ? 'nav-link scrollto active' : 'nav-link scrollto'} href="#" onClick={props.onExploreToggle}>Explore</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="https://api.fortune.luka.sh/docs">API</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav> {/* <!-- .navbar --> */}
            </div>
        </header>
    )
}

// export default Header

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onExploreToggle: () => dispatch({type: 'EXPLORER_TOGGLE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

