import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MoviesList from './MoviesList'

function App() {

  const moviesData = [
    {
      "_id": "1ae23ef1",
      "title": "The Godfather",
      "director": "Francis Coppola",
      "hasOscars": true,
      "IMDBRating": 9.2
    },
    {
      "_id": "1ae23ef2",
      "title": "Star Wars",
      "director": "George Lucas",
      "hasOscars": true,
      "IMDBRating": 8.7
    },
    {
      "_id": "1ae23ef3",
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "hasOscars": false,
      "IMDBRating": 9.3
    },
    {
      "_id": "1ae23ef4",
      "title": "Jurassic Park",
      "director": "Steven Spielberg",
      "hasOscars": false,
      "IMDBRating": 8.0
    },
    {
      "_id": "1ae23ef5",
      "title": "Sharknado",
      "director": "Anthony C. Ferrante",
      "hasOscars": false,
      "IMDBRating": 5.2
    },
    {
      "_id": "1ae23ef6",
      "title": "Titanic",
      "director": "James Cameron",
      "hasOscars": true,
      "IMDBRating": 8.9
    }
  ]

  const addMovie = () => {
    const newMovie = {
      _id: '1ae2fdjer',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      hasOscars: true,
      IMDBRating: 8.6
    }

    // update the state of movies
    // movies.push(newMovie) // -> don't mutate state directly
    // const moviesCopy = movies.slice()
    // moviesCopy.push(newMovie)
    // setMovies(moviesCopy)
    setMovies([newMovie, ...movies])

    // change the color of the button
    const colors = ['green', 'orange', 'yellow', 'red']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setButtonColor(randomColor)
  }

  const [movies, setMovies] = useState(moviesData)
  const [buttonColor, setButtonColor] = useState('blue')

  // const movieList = movies.map(movie => <h3>{movie.title}</h3>)
  // console.log(movieList)
  return (
    <div className="App">
      <h1>Movies List</h1>
      <button style={{ backgroundColor: buttonColor }} onClick={addMovie}>Add the movie Interstellar</button>
      {/* try to not use the array index as a key prop */}
      {/* {movies.map(movie => <h3 key={movie._id}>{movie.title}</h3>)} */}

      {/* {movieList} */}
      <MoviesList list={movies} />
    </div>
  )
}

export default App
