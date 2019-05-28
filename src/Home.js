import React from 'react';
import { Header, Button, Divider, Embed, Dropdown, Icon, Image } from 'semantic-ui-react'
import { COUNTRY_OPTIONS } from './countriesData.js';

class Home extends React.Component {
  state = {
    active: true,
    selectedCountry: null,
    webcams: []
  }

  handleClick = () => {
    this.setState({
        active: true
    })
  }

  handleChange = (e,data) => {
    this.setState({
      selectedCountry: data.value
    }, () => fetch("http://localhost:3001/api/v1/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(webcams => this.setWebcamsState(webcams))
    )
  }

  setWebcamsState = (webcams) => {
    this.setState({
      webcams
    }, () => console.log(this.state.webcams))
  }


  render() {
    const { active } = this.state
    return(
      <div>
        {/* <h1>Welcome to the Travel App</h1> */}
        <div className='HeaderSpacing'>
          <div className='HeaderText'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
              <Header.Content>This is the Home Page</Header.Content>
            </Header>
            <Image centered size='large' src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
          </div>
        </div>

        <div className='Search'>
          <Dropdown
            onChange={this.handleChange}
            placeholder='Select Country'
            fluid
            search
            selection
            value
            options={COUNTRY_OPTIONS}
          />
        </div>

        <div className='VideoPadding'>
          <Embed
            active={active}
            icon='arrow circle down'
            url='https://api.lookr.com/embed/player/1170887551/month'
          />
          <Divider hidden />
          <Button content='Activate' icon onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Home
