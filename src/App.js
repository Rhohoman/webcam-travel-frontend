import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import DisplayPage from './DisplayPage';
import NavHeader from './NavHeader';

class App extends React.Component {
  render(){
    return (
      <div>
        <Route path="/"
          component={ NavHeader }/>
        <Switch>
          <Route path="/:id"
            render={(routerProps) => <DisplayPage {...routerProps}/>}/>

          <Route path="/"
            render={(routerProps) => <Home {...routerProps}/>}/>

          <Route render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
