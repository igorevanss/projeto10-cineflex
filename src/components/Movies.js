import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Movies() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const promise = axios.get(
      'https://mock-api.driven.com.br/api/v8/cineflex/movies'
    )

    promise.then(res => {
      setItems(res.data)
    })

    promise.catch(err => {
      console.log(err.response.data)
    })
  }, [])

  if (items.length === 0) {
    return <img src="loading.gif" />
  }

  return (
    <MoviesContainer>
      <h3>Selecione o filme</h3>
      <MovieContainer>
        {items.map((item, index) => (
          <Movie key={index}>
            <Link to={`/Sections/${item.id}`}>
              <img src={item.posterURL} alt="Filme" />
            </Link>
          </Movie>
        ))}
      </MovieContainer>
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3 {
    margin-bottom: 36px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;
  }
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
