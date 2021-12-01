import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {version} from '../package.json';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { fortuneUrl } from './services/get-fortune'

const store = createStore(reducer)

ReactDOM.render(
    <div>
        API: <a href={fortuneUrl}>{fortuneUrl}</a>
    </div>,
    document.getElementById('api-url')
)

document.getElementById('version').innerText = `version: ${version}`

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
