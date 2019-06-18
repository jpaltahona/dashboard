import React from 'react';
import './App.css';
import  Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/dashboard';
import Users from './Users/Users';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/users" component={Users}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
