import React, { Component } from 'react'
import './JokeList.css'
import Joke from './Joke'

export default class JokeList extends Component {
  render() {
    return (
      <div className="JokeList">
        jokelist...
        <Joke />
        <Joke />
        <Joke />
      </div>
    )
  }
}
