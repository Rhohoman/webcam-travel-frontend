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
    cities: Data
  }

  render(){
    return (
      <div>
        <Switch>

          <Route
            path="/:id"
            render={(routerProps) => {

              const foundCity = this.state.cities.find(city => city.id === parseInt(routerProps.match.params.id))
              // console.log(foundCity)
              // return <CityCard img_url={foundCity.image_url} title={foundCity.name} />
              return <DisplayPage {...foundCity}/>
            }
            }>
          </Route>

          {/* <Route
            path="/cities"
            render={(routerProps) => <Cities cities={this.state.cities} {...routerProps}/>}>
          </Route> */}

          <Route
            path="/home"
            render={(routerProps) => <Home cities={this.state.cities} {...routerProps}/>}>
          </Route>

          <Route exact path="/" component={Home} />
          <Route
            render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
