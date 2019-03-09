import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Components/Reducers';
import {login} from './Components/Actions';

const store = createStore(reducer,{ login: 'notloggedin' });


ReactDOM.render( (
	<BrowserRouter>
<Provider store={store}>
  
    <App />
  
  </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
