import React from 'react'
import CityCard from './CityCard'

class Cities extends React.Component{
    render(){
        return(
            <div>
                <h1>Testing Cities</h1>
               { this.props.cities.map(city => <CityCard key={city.id} {...city}/>)}
            </div>
        )
    }
}

export default Cities