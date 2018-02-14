import './styles.scss';
import React from '../node_modules/react/';
import ReactDOM from '../node_modules/react-dom/';
import App from './components/App';



console.log('Hello, world!');

const root = document.getElementById('app-container');

ReactDOM.render(<App />, root);