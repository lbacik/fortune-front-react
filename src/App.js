import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Fortune from './components/Fortune/Fortune'
import Explorer from './containers/Explorer/Explorer'
import ExplorerToggle from './components/ExplorerToggle/ExplorerToggle'
import axios from "axios"
import Layout from './components/Layout/Layout'

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'http://localhost:8080/fortune'

class App extends Component {

    state = {
        explorerShow: false,
        fortune: "",
    }

    componentDidMount() {
        this.newFortune()
    }

    newFortune() {
        axios.get(fortuneUrl)
            .then(res => {
                this.setState({fortune: res.data.fortune})
            })
    }

    exploreToggleHandler = () => {
        this.setState({explorerShow: ! this.state.explorerShow})
    }

    setFortune = (fortune) => {
        this.setState({fortune: fortune})
    }

    render() {

        let explorer = null
        if (this.state.explorerShow === true) {
            explorer = <Explorer fortuneCallback={this.setFortune} />
        }

        return (
            <Layout>
                <div className="d-flex flex-row">
                    <div className="col-3 m-2 p-0 pb-2">
                        <ExplorerToggle
                            onClick={this.exploreToggleHandler}
                            explorerShow={this.state.explorerShow}
                        />

                        {explorer}
                    </div>

                    <div className="container-fluid pt-4">
                        <Fortune
                            fortune={this.state.fortune}
                            onClick={this.newFortune.bind(this)}/>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default App;
