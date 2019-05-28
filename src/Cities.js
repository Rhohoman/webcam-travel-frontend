import React from 'react'
import CityCard from './CityCard'
import { Card } from "semantic-ui-react";

class Cities extends React.Component{
    render(){
        return(
            // <div className='Cities' >
            //     <h1>Testing Cities</h1>
            //    { this.props.cities.map(city => <CityCard key={city.id} {...city}/>)}
            // </div>
            <Card.Group itemsPerRow={4} size='tiny' className='Cities'>
                {/* <h1>Testing Cities</h1> */}
               { this.props.cities.map(city => <CityCard key={city.id} {...city}/>)}
            </Card.Group>
        )
    }
}

export default Cities