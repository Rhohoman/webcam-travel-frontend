import React from 'react';
import { Header, Button, Divider, Embed, Dropdown, Icon, Image } from 'semantic-ui-react';
import { COUNTRY_OPTIONS } from './countriesData.js';
import { Card } from "semantic-ui-react";
import CityCard from './CityCard';

class Home extends React.Component {
  state = {
    active: true,
    selectedCountry: null
  }

  handleButtonClick = () => {
    this.setState({
        active: true
    })
  }

  handleChange = (event) => {
    event.persist()
    // console.log(event.target.value)
    console.log(event.target.innerText)
    //depending on the value of the drop down we would be able to recieve that Card
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

        <div className='VideoPadding'>
          <Embed
            active={active}
            icon='arrow circle down'
            url='https://api.lookr.com/embed/player/1170887551/month'
          />
          <Divider hidden />
          {/* <Button content='Activate' icon onClick={this.handleButtonClick} /> */}
        </div>

        <div className='Search'>
          <Dropdown
            onChange={this.handleChange}
            placeholder='Select Country'
            fluid
            search
            selection
            options={COUNTRY_OPTIONS}
          />
        </div>

        <div className='Cities'>
          <Header as='h2' icon textAlign='center'>
            <Header.Content>These are the Cards</Header.Content>
          </Header>
          <Card.Group itemsPerRow={4} size='tiny' >
              { this.props.cities.map(city => <CityCard key={city.id} {...city}/>)}
          </Card.Group>
        </div>

      </div>
    )
  }
}

export default Home
