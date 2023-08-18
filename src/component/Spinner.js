import React, { Component } from 'react'
import Beann  from '../Assests/Beann.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <img src={Beann} alt="Loading" />
        </div>
    )
  }
}
