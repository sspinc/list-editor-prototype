import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/core/configureStore.js';
import rootReducer from './js/rootReducer.js';
import rootSaga from './js/rootSaga.js';
import App from './js/App.jsx';
import css from './less/main.less';

const store = configureStore(rootReducer);

store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
          <App />
        </Provider>,
    document.getElementById('app')
);
