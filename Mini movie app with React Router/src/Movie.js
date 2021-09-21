import React, { Component } from "react";
import { apiKey } from './config.js';
import axios from 'axios';

class Movie extends Component {
    constructor() {
        super()
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        axios.get(singleMovieUrl).then((response) => {
            const movie = response.data;
            this.setState({
                movie
            })
        })
    }
    render() {
        if (this.state.movie.title == undefined) {
            return (<h1>Loading ...</h1>)
        }
        const movie = this.state.movie;
        const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}?api_key=${apiKey}`;
        return (
            <div>
                <img src={imageUrl} alt='movie poster' />
                <p>Title: {movie.title}</p>
                <p>Budget: {movie.budget}</p>
                <p>Tagline: {movie.tagline}</p>
                <p>Overview: {movie.overview}</p>
            </div>
        )
    }
}
export default Movie