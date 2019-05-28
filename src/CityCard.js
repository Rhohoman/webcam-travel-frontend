import React from 'react'
import { Card, Image } from "semantic-ui-react";

class CityCard extends React.Component {

    render(){

    const { img_url, title, region, player_url } = this.props
        return(
            <Card onClick={() => this.props.handleClick()}>
                <Card.Header>{region ? region : 'N/A'}</Card.Header>
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
