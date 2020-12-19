import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Fortune from './Fortune/Fortune'
import Explorer from './Explorer/Explorer'
import ExplorerToggle from './ExplorerToggle/ExplorerToggle'
import axios from "axios"

class App extends Component {

    FORTUNE_URL = 'http://localhost:8080/fortune'

    state = {
        explorerShow: false,
        fortune: "",
    }

    componentDidMount() {
        this.newFortune()
    }

    newFortune() {
        axios.get(this.FORTUNE_URL)
            .then(res => {
                this.setState({fortune: res.data.fortune})
            })
    }

    exploreToggleHandler() {
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
          <div className="App">
              <div id="header">
                  <ExplorerToggle
                      explorerShow={this.state.explorerShow}
                      onClick={this.exploreToggleHandler.bind(this)} />
              </div>
              <div id="body">
                  {explorer}
                  <Fortune
                      fortune={this.state.fortune}
                      onClick={this.newFortune.bind(this)}/>
              </div>
              <footer id="footer" className="footer mt-auto py-5 bg-dark">
              </footer>
          </div>
        );
    }
}

export default App;
