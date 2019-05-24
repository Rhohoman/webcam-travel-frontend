import React from 'react'


class CityCard extends React.Component {

    render(){
    // console.log(this.props)
    const { image_url, name } = this.props
        return(
            <div>
                <h3 className="centered high">{name}</h3>
                <div className="image-wrapper">
                <img className="image" src={image_url} alt={name}/>
                </div>
            </div>
        )
    }
}

export default CityCard