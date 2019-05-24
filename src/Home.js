import React from 'react';
import { Header } from 'semantic-ui-react'


class Home extends React.Component {
    render(){
        return(
            <div>
                {/* <h1>Welcome to the Travel App</h1> */}
                <div className='Header'>
                    <Header as='h1' dividing>
                        This is Home Page
                    </Header>
                </div>
            </div>
        )
    }
}

export default Home