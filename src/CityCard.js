import React from 'react'
import { Card, Image } from "semantic-ui-react";

class CityCard extends React.Component {

    render(){
    
    const { image_url, name } = this.props
        return(
            // <div >
            //     <h3>{name}</h3>
            //     <div>
            //         <img src={image_url} alt={name}/>
            //     </div>
            // </div>

            <Card >
                <Card.Header>{name}</Card.Header>
                <Image src={image_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Description>
                        Descriptions
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default CityCard