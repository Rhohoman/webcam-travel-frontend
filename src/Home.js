import React from 'react';
import { Header } from 'semantic-ui-react'
import { Button, Select, Input } from 'semantic-ui-react'

class Home extends React.Component {
    render(){

        const options = [
            { key: 'all', text: 'All', value: 'all' },
            { key: 'continents', text: 'Continents', value: 'continents' },
            { key: 'countries', text: 'Countries', value: 'countries' },
          ]

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
            </div>
        )
    }
}

export default Home