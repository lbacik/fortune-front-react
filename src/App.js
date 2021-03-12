import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Fortune from './containers/Fortune/Fortune'
import Explorer from './containers/Explorer/Explorer'
import ExplorerToggle from './components/ExplorerToggle/ExplorerToggle'
import Layout from './components/Layout/Layout'
import { connect } from 'react-redux'

class App extends Component {

    render() {

        return (
            <Layout>
                <div className="d-flex flex-row">
                    <div className="col-3 m-2 p-0 pb-2">
                        <ExplorerToggle />
                        {this.props.explorerShow === true && <Explorer /> }
                    </div>
                    <div className="container-fluid pt-5">
                        <Fortune />
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

export default connect(mapStateToProps)(App);
