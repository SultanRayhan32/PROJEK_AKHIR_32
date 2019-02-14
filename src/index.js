import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './support/agency.css';
// import './support/fontawesome-free/css/fontawesome.min.css';
// import './support/fontawesome-free/css/all.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers/index';
import './support/portfolio-item.css';
import './support/fontawesome-free/css/fontawesome.min.css';
import './support/fontawesome-free/css/all.css';
// import './support/css/style.css';
import './support/css/agency.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/themify/themify-icons.css';
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './fonts/elegant-font/html-css/style.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/slick/slick.css';
import './css1/util.css';
import './css1/main.css';

const store = createStore(reducers, {} , applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
