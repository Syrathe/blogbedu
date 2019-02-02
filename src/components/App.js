import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //le damos un alias a BrowserRouter
import Home from './Home'
import Add from './Add'
import Menu from './Menu'
import View from './View'
import Edit from './Edit'

class App extends Component {

  render() {
    return (
      /*will work as a wrapper, also, we are using the alias assigned in line 2 - Router must wrap every component that will use it.*/
      <Router> 
        <div>
          <Menu/>
          <div className="container my-5">
            <div className="row">
              <div className="col">
                <h1 className="text-center">Blog</h1>
              </div>
            </div>
            <Route path ="/home" component = {Home}/>
            <Route path ="/add" component = {Add}/>
            <Route path="/view/:id" component = {View}/>
            <Route path="/edit/:id" component = {Edit}/>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;