import styled from 'styled-components'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Sections() {


  const [sections, setSections] = useState([])
  const {idFilme} =useParams()
  
  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    promise.then(res => {
      setSections(res.data)
      console.log(res.data)
    })
    promise.catch(err => console.log(err))

  }, [])
  

  return (
    <>
    <SectionsContainer>
      <h3>Selecione o horário</h3>
      <div>
      {Array.isArray(sections.days) && sections.days.map((section) => (
        <Schedule key={section.id}>
          <p>{section.weekday} - {section.date}</p>
          <Hours>
            {section.showtimes.map((showtime) =>(
              <Link key={showtime.id} to={`/assentos/${showtime.id}`} style={{ textDecoration: 'none' }}>
            <div>
              <p>{showtime.name}</p>
            </div>
            </Link>
            ))}

          </Hours>
        </Schedule>
      ))}

      </div>
    </SectionsContainer>
    <Footer sections={sections}/>
    </>
  )
}

const SectionsContainer = styled.div`
  margin-left: 23px;
`
const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #293845;
  }
`
const Hours = styled.div`
  display: flex;
  margin-bottom: 22px;
  gap: 8px;

  div {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div > p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
  }
`
