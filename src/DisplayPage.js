import React from 'react'
import { Container, Image } from "semantic-ui-react";

const DisplayPage = (props) => {
    console.log(props)
    return(
        <div>
            <Container>
                <h1>This is where the title should be: {props.name}</h1>
                <Image src={props.image_url} ui={false}/>
            </Container>
        </div>
    )
}

export default DisplayPage