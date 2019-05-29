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
    cities: Data,
    tempWebcams: [],
    tempid: 0,
  }


  // call back to get the individual information

  selectWebcamId = (webcams, id) => {
    //here I would find the webcam I want
    // console.log('Ive got webcams',webcams)
    // console.log('Ive got id', id)
    this.setState({
      tempWebcams: webcams,
      tempid: id,
    },() => console.log(this.state))
  }


  render(){
    return (
      <div>
        <Switch>

          <Route
            path="/:id"
            render={(routerProps) => {
              const foundWebcam = this.state.tempWebcams.find(webcam => webcam.id === parseInt(routerProps.match.params.id))
              return <DisplayPage {...foundWebcam} {...routerProps}/>
              //put the information into this component
            }
            }>
          </Route>

          {/* <Route
            path="/cities"
            render={(routerProps) => <Cities cities={this.state.cities} {...routerProps}/>}>
          </Route> */}

          <Route
            path="/home"
            render={(routerProps) => <Home selectWebcamId={this.selectWebcamId} {...routerProps}/>}>
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
