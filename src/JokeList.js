import React, { Component } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import './JokeList.css'
import Joke from './Joke'
import { storeToLocalStorage } from './helpers'

export default class JokeList extends Component {
  
  static defaultProps = {
    numJokesToGet: 10
  }

  constructor(props) {
    super(props)
  
    this.state = {
       jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]') ,
       loading: false
    }

    this.seenJokes = new Set(this.state.jokes.map(joke => joke.joke));

    this.changeScore = this.changeScore.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.fetchJokes = this.fetchJokes.bind(this)
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.setState({ loading: true }, this.fetchJokes);
    }
  }

  changeScore(jokeID, amount) {
    let tempJokes = this.state.jokes.map(joke =>
      joke.id === jokeID
        ? { ...joke, score: joke.score + amount }
        : joke
    );
    this.setState({
      jokes: tempJokes
    }, () => storeToLocalStorage('jokes', this.state.jokes));
    //window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes)))
    //console.log(window.localStorage)
  }

  handleClick() {
    this.setState({ loading: true }, this.fetchJokes);
  }

  async fetchJokes() {
    try {
      let newJokes = [];
      while(newJokes.length < this.props.numJokesToGet) {
        let response = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" } // because the default is html, and we want JSON
        });
        const newJokeTxt = response.data.joke;
        if (!this.seenJokes.has(newJokeTxt)) {
          const newJoke = { id: uuid(), joke: newJokeTxt, score: 0 }
          newJokes = [...newJokes, newJoke];
          this.seenJokes.add(newJoke.joke);
        }
      }
      this.setState(prevState => ({
        jokes: [...prevState.jokes, ...newJokes],
        loading: false
      }), () => {
        storeToLocalStorage('jokes', this.state.jokes)
        storeToLocalStorage('seenJokes', this.seenJokes)
      });
    } catch(e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  
  render() {
    if (this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin' />
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      );
    }
    //const orderedJokes = this.state.jokes.sort((a, b) => (a.score > b.score) ? -1 : 1) // 1 is a-z / -1 is z-a
    //const orderedJokes = this.state.jokes.sort((a, b) => (a.score - b.score)) // same result as above
    const orderedJokes = this.state.jokes;
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
          {orderedJokes.map(joke =>
            <Joke key={joke.id} joke={joke} changeScore={this.changeScore} />
          )}
        </div>
      </div>
    )
  }
}
