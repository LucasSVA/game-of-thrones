import React, { Component } from 'react'

class Character extends Component {
    render() {
        return (


            <div className='throne'>
                <img src={this.props.image} alt="throne photo" className='throne-img' />
                <p>{this.props.name}</p>
                <p>{this.props.title}</p>

            </div>

        )
    }
}



export default Character