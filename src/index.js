import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApiSelect from './components/ApiSelect';
import registerServiceWorker from './registerServiceWorker';
import {version} from '../package.json';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer)

ReactDOM.render(
    <ApiSelect
        options={[
            'debian-12.api.fortune.luka.sh',
            'debian-11.api.fortune.luka.sh',
            'debian-10.api.fortune.luka.sh',
        ]}
    />,
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
