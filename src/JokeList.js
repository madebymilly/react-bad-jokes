import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke'

export default class JokeList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       jokes: [],
       jokesLoading: false
    }

    this.changeScore = this.changeScore.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.fetchJokes = this.fetchJokes.bind(this)
  }

  componentDidMount() {
    this.fetchJokes();
  }

  changeScore(jokeID, amount) {
    let tempJokes = this.state.jokes.map(joke =>
      joke.id === jokeID
        ? { ...joke, score: joke.score + amount }
        : joke
    );
    this.setState({
      jokes: tempJokes
    })
  }

  handleClick() {
    this.fetchJokes();
  }

  async fetchJokes() {
    this.setState({ loadingJokes: true });
    let newJokes = [];
    while(newJokes.length < 10) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      const newJoke = { id: response.data.id, joke: response.data.joke, score: 0 }
      newJokes = [...newJokes, newJoke];
    }
    this.setState(prevState => ({
      jokes: [...prevState.jokes, ...newJokes],
      loadingJokes: false
    }));
  }
  
  render() {
    if (this.state.loadingJokes) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin' />
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      );
    }
    return (
      <div className="JokeList">
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Bad</span> Jokes
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="smiley"/>
          <button className='JokeList-getmore' onClick={this.handleClick}>
            Fetch More Jokes
          </button>
        </div>
        <div className='JokeList-jokes'>
          {this.state.jokes.map(joke =>
            <Joke key={joke.id} joke={joke} changeScore={this.changeScore} />
          )}
        </div>
      </div>
    )
  }
}
