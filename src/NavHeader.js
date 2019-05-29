import React from 'react'
import { Header, Icon } from "semantic-ui-react";
import HomeText from './HomeText'

class NavHeader extends React.Component{
  render(){
    const { pathname } = this.props.location
    return(
      <div className='HeaderSpacing'>
        <div className='HeaderText'>
          <Header as='h2' icon textAlign='center'>
            <Icon name='travel' circular />
            <Header.Content>Webcam Travel</Header.Content>
          </Header>
          {pathname === "/" ? <HomeText /> : null}
        </div>
      </div>
    )
  }
}

export default NavHeader
