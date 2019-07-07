import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RouteMain from './pages/RouteMain';
import ScrollUpOnRouteChange from './components/ScrollUpOnRouteChange';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getItemLocalStorage } from './utils/localStorage';
import storeConfig from './redux/storeConfig';
import actionTypes from './redux/actionTypes';
import Toast from './components/Toast';
import Auth from './components/Auth';

const store = storeConfig({
  apiData: {
    [actionTypes.POST_AUTHENTICATION_SESSION_NEW]: {
      session_id: getItemLocalStorage('session_id')
    }
  }
});

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Auth />
        <ScrollUpOnRouteChange />
        <div>
          <Header setShowSideBar={setShowSideBar} />
          <RouteMain
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <Toast />
      </Router>
    </Provider>
  );
};

export default App;
