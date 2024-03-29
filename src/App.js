import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Fortune from './containers/Fortune/Fortune'
import Explorer from './containers/Explorer/Explorer'
import ExplorerToggle from './components/ExplorerToggle/ExplorerToggle'
import Layout from './components/Layout/Layout'
import SetupState from './components/SetupState'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import Search from "./components/Search/Search";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route path='/search/:query?'>
                    <Search />
                </Route>
                <Route path='/:dbFile?/:dbFileIndex?'>
                    <SetupState />
                    <Layout>
                        <div className="d-flex flex-row mb-4">
                            <div className="col-3 m-2 p-0 pb-2">
                                <ExplorerToggle />
                                {this.props.explorerShow === true && <Explorer /> }
                            </div>
                            <div className="container-fluid pt-5">
                                <Fortune />
                            </div>
                        </div>
                    </Layout>
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

export default connect(mapStateToProps)(App);
