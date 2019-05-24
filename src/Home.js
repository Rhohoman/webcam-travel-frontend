import React from 'react';
import { Header, Button, Select, Input, Divider, Embed } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { COUNTRY_OPTIONS } from './countriesData.js';

class Home extends React.Component {
  state = {

  }

  handleClick = () => {
      this.setState({
          active: true
      })
  }

  render(){
    const options = [
        { key: 'all', text: 'All', value: 'all' },
        { key: 'continents', text: 'Continents', value: 'continents' },
        { key: 'countries', text: 'Countries', value: 'countries' },
      ]

    const { active } = this.state

    return(
        <div>
            {/* <h1>Welcome to the Travel App</h1> */}
            <div className='HeaderSpacing'>
                <div className='HeaderText'>
                    <Header as='h1' dividing>
                        This is Home Page

                        <div className='Sub'>
                            <Header sub>Travel</Header>
                        </div>
                    </Header>
                </div>
            </div>

            <div className='Search'>
                <Input type='text' placeholder='Search...' action>
                     <input />
                     <Select options={options} defaultValue='all' />
                     <Button type='submit'>Search</Button>
                </Input>
            </div>

            <div className='Search'>
                <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={COUNTRY_OPTIONS}
                />
            </div>

            <div className='VideoPadding'>
                <Embed
                    active={active}
                    icon='arrow circle down'
                    id='cAfcyrqknEE'
                    source='youtube'
                />
                <Divider hidden />
                <Button content='Activate' icon onClick={this.handleClick} />
            </div>
        </div>
    )
  }
}

export default Home
