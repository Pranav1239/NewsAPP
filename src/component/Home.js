import React, { Component } from 'react'
import NewsHead from './NewsHead';
import NewsSave from './NewsSave'; 

export default class Home extends Component {
  render() {
    return (
     <>
     <NewsHead/>
     <NewsSave PageSize="12"/>
     </>
    )
  }
}
