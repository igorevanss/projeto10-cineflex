import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const promise = axios.get(
      'https://mock-api.driven.com.br/api/v5/cineflex/movies'
    )

    promise.then(res => {
      setMovies(res.data)
    })

    promise.catch(err => {
      console.log(err.response.data)
    })
  }, [])

  if (movies.length === 0) {
    return <p>Carregando...</p>
  }

  return (
    <MoviesContainer>
      <h3>Selecione o filme</h3>
      <MovieContainer>
        {movies.map((movie, index) => (
          <Movie key={index}>
            <Link to={`/sessoes/${movie.id}`}>
              <img src={movie.posterURL} alt="Filme" />
            </Link>
          </Movie>
        ))}
      </MovieContainer>
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`
const Movie = styled.div`
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  :last-of-type {
    margin-bottom: 50px;
  }

  img {
    width: 129px;
    height: 193px;
  }
`
