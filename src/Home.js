import React from 'react';
import { Header, Divider, Embed, Dropdown, Card } from 'semantic-ui-react';
import { COUNTRY_OPTIONS } from './countriesData.js';
import WebcamCard from './WebcamCard';


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

  render() {
    const {selectedCountry} = this.state
    return(
      <React.Fragment>
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
              <Header.Content>{selectedCountry === null ? 'Featured:  ' : this.getCountryName(selectedCountry)}</Header.Content>
            </Header>
            <Card.Group itemsPerRow={4} size='tiny' >
                 {this.state.webcams ? this.renderWebcamCards() : <h1>loading</h1>}
            </Card.Group>
        </div>
      </React.Fragment>
    )
  }

  getCountryName = (code) => {
    return COUNTRY_OPTIONS.find(country => country.key === code).text
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
    return this.state.webcams.map(webcam => <WebcamCard key={webcam.id} {...webcam}/>)
  }
}

export default Home
