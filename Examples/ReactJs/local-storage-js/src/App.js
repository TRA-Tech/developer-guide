import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import CustomRoute from './helpers/CustomRoute';
import UserList from './views/UserList';
import AddUser from './views/AddUser';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <CustomRoute path="/user-list" component={UserList} />
      <CustomRoute path="/add-user" component={AddUser} />
    </Router>
  );
}

export default App;
