import React from 'react';
import { Header, Container, Divider, Embed, Dropdown, Icon, Image, Card } from 'semantic-ui-react';
import { COUNTRY_OPTIONS } from './countriesData.js';
import CityCard from './CityCard';

class Home extends React.Component {
  state = {
    selectedCountry: null,
    webcams: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/featured')
    .then(res => res.json())
    .then(webcams => this.setState({
      webcams
    }))
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
    .then(webcams => this.setState({webcams}))
    )
  }

  renderWebcamCards = () => {
    return this.state.webcams.map(webcam => <CityCard history={this.props.history} key={webcam.id} {...webcam}/>)
  }


  render() {
    console.log(this.props)
    return(
      <div>
        <div className='HeaderSpacing'>
          <div className='HeaderText'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='travel' circular />
              <Header.Content>Webcam Travel</Header.Content>
            </Header>
            <Container>
              <h4>Welcome to the Webcam Travel App!</h4>
              <p>Our purpose is to help introduce new travel locations by using public webcams that</p>
              <p>allow you to see where you are planning to visit. Without the filler of travel brochures</p>
              <p>we believe that showing you the condition of this area is crucial for an honest review.</p>
            </Container>
          </div>
        </div>

        <div className='VideoPadding'>
          <Embed
            active={true}
            icon='arrow circle down'
            url='https://api.lookr.com/embed/player/1170887551/month'
          />
          <Divider hidden />
        </div>

        <div className='Search'>
          <Header as='h3' textAlign='center'>Search a Country!</Header>
          <Dropdown
            onChange={this.handleChange}
            placeholder='Select Country'
            fluid
            search
            selection
            value={this.state.selectedCountry}
            selectOnNavigation={false}
            options={COUNTRY_OPTIONS}
          />
        </div>

        <div className='Countries' >
            <Header as='h2' icon textAlign='center'>
              <Header.Content>{this.state.selectedCountry === null ? 'Featured:  ' : 'Featured: ' + this.state.selectedCountry}</Header.Content>
            </Header>
            <Card.Group itemsPerRow={4} size='tiny' >
                 {this.state.webcams ? this.renderWebcamCards() : <h1>loading</h1>}
            </Card.Group>
        </div>

      </div>
    )
  }
}

export default Home
