import React from 'react'
import { Card, Image } from "semantic-ui-react";

class CityCard extends React.Component {


    render(){
    const { img_url, title, region, player_url, id } = this.props
        return(
            <Card onClick={this.handleClick} href={`http://localhost:3000/${id}`}>
                <Card.Header>{region ? region : 'N/A'}</Card.Header>
                <Image src={img_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Description>
                      { title }
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default CityCard
