import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';

import reduser from 'redusers'
import App from 'containers/App';

const store = createStore(reduser)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,
    document.getElementById('root')
);

