import React from 'react'
import { Card, Image } from "semantic-ui-react";

class CityCard extends React.Component {

    render(){

    const { img_url, title, region, player_url } = this.props
        return(
            // <div >
            //     <h3>{name}</h3>
            //     <div>
            //         <img src={image_url} alt={name}/>
            //     </div>
            // </div>

            <Card >
                <Card.Header>{region}</Card.Header>
                <Image src={img_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Description>
                      <a href={player_url}>{ title }</a>  
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default CityCard
