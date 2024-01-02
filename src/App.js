// import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import SetupState from './components/SetupState'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/Main/About";


class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/:dbFile?/:dbFileIndex?'>
                        <SetupState />
                        <Layout>
                            <Header />
                            <Hero explorer={this.props.explorerShow} />
                            <About />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

export default connect(mapStateToProps)(App);
