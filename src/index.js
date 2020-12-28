import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {version} from '../package.json';

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'http://localhost:8080'

ReactDOM.render(
    <div>
        API: <a href={fortuneUrl}>{fortuneUrl}</a>
    </div>,
    document.getElementById('api-url'));

document.getElementById('version').innerText = `version: ${version}`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
