import React, { Component } from 'react'
import './Joke.css'

export default class Joke extends Component {
  constructor(props) {
    super(props)
  
    this.handleScoreUp = this.handleScoreUp.bind(this)
    this.handleScoreDown = this.handleScoreDown.bind(this)
    this.getColor = this.getColor.bind(this)
    this.getEmoticon = this.getEmoticon.bind(this)
  }

  handleScoreUp() {
    this.props.changeScore(this.props.joke.id, 1)
  }

  handleScoreDown() {
    this.props.changeScore(this.props.joke.id, -1)
  }

  getColor() {
    if (this.props.joke.score >= 15) {
      return "#4CAF50";
    } else if (this.props.joke.score >= 12) {
      return "#8BC34A";
    } else if (this.props.joke.score >= 9) {
      return "#CDDC39";
    } else if (this.props.joke.score >= 6) {
      return "#FFEB3B";
    } else if (this.props.joke.score >= 3) {
      return "#FFC107";
    } else if (this.props.joke.score >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }
  
  getEmoticon() {
    if (this.props.joke.score >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.joke.score >= 12) {
      return "em em-laughing";
    } else if (this.props.joke.score >= 9) {
      return "em em-smiley";
    } else if (this.props.joke.score >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.joke.score >= 3) {
      return "em em-neutral_face";
    } else if (this.props.joke.score >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    const { joke } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="Joke-score-up far fa-thumbs-up" onClick={this.handleScoreUp}></i>
          <div className="Joke-score" style={{borderColor: this.getColor()}}>{joke.score}</div>
          <i className="Joke-score-down far fa-thumbs-down" onClick={this.handleScoreDown}></i>
        </div>
        <div className="Joke-text">
          {joke.joke}
        </div>
        <div className="Joke-emoticon">
          <i className={this.getEmoticon()}></i>
        </div>
      </div>
    )
  }
}
