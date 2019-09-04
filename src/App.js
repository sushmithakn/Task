import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import EmployeeList from './components/HomePage/EmployeeList';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

const Employee = () => (
  <EmployeeList />
);

const Login = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  path="/employeelist" component={Employee} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
