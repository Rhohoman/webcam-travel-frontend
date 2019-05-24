import React from 'react';
import { Header, Button, Divider, Embed, Dropdown, Icon, Image } from 'semantic-ui-react'
import { COUNTRY_OPTIONS } from './countriesData.js';

class Home extends React.Component {

    state = {
      active: true
    }

    handleClick = () => {
        this.setState({
            active: true
        })
    }

    render(){

          const countryOptions = [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
            { key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda' },
            { key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan' },
            { key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia' },
            { key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia' },
            { key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana' },
            { key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island' },
            { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
            { key: 'vg', value: 'vg', flag: 'vg', text: 'British Virgin Islands' },
            { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
            { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
            { key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso' },
            { key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi' },
            { key: 'tc', value: 'tc', flag: 'tc', text: 'Caicos Islands' },
            { key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },
            { key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon' },
            { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
          ]

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
