import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Data from './data';
import Cities from './Cities';
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {

  state = {
    cities: Data
  }

  render(){
    return (
      <div>
        <Switch>
        <Route 
            path="/home"
            render={(routerProps) => <Home {...routerProps}/>}></Route> 
          <Route
            path="/cities"
            render={(routerProps) => <Cities cities={this.state.cities} {...routerProps}/>}></Route>
          <Route exact path="/" component={Home} />
          <Route
            render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;




