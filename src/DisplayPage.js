import React from 'react'
import { Container, Header, Divider, Embed, } from "semantic-ui-react";

class DisplayPage extends React.Component {
    state= {
      specificWebcam: null
    }

    componentDidMount() {
      fetch(`http://localhost:3001/api/v1/webcams/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(webcam => this.setState({
        specificWebcam: webcam
      }))
    }

    render() {
      console.log(this.props)
      return(
        <React.Fragment >
          { this.state.specificWebcam ?
            <div>
              <Container>
                <div className='Display'>
                  <div className='DisplayHeader'>
                    <Header as='h2' icon textAlign='center'>
                      {this.state.specificWebcam.title}
                    </Header>
                  </div>
                  <div>
                    <Embed
                      active={true}
                      icon='arrow circle down'
                      url={`https://api.lookr.com/embed/player/${this.state.specificWebcam.api_id}/month`}
                    />
                    <Divider hidden />
                  </div>
                </div>
              </Container>
            </div>
            :
            <h1>Loading</h1>
          }
        </React.Fragment>
      )
    }
}

export default DisplayPage
