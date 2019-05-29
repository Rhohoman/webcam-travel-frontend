import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Data from './data';
import Cities from './Cities';
import { Route, Switch, Redirect } from 'react-router-dom';
import DisplayPage from './DisplayPage';

class App extends React.Component {

  state = {
    webcams: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/featured')
    .then(res => res.json())
    .then(webcams => this.setState({
      webcams
    }))
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path="/:id"
            render={(routerProps) => <DisplayPage {...routerProps}/>}/>

          <Route path="/"
            render={(routerProps) => <Home webcams={this.state.webcams} {...routerProps}/>}/>

          <Route render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
