import React from 'react'
import { Card, Image } from "semantic-ui-react";

class CityCard extends React.Component {

    handleClick = () => {
        // console.log(event.target)
        console.log(this.props,' props in city card')
        // this.props.selectWebcamId(this.props.webcams,this.props.id)
        // this.props.history.push(`/${this.props.id}`)
    }

    render(){
    const { img_url, title, region, player_url } = this.props

    // console.log(this.props)
        return(
            <Card onClick={this.handleClick}>
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
