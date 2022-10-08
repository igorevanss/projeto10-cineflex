import styled from 'styled-components'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Seat({name, isAvailable}){

  return (
    <>
      
    </>
  )

}

export default function Seats() {
  const [seats, setSeats] = useState([])
  const [selected, setSelected] = useState([])
  const [name, setUserName] = useState('')
  const [cpf, setCpf] = useState('')

  function toReserve(e) {
    e.preventDefault();

    const requisition = axios.post(
      'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
      {
        ids: [1, 2, 3],
        name: 'Fulano',
        cpf: '12345678900'
      }
    )
  }

  function changeColor(seatClicked) {
    if (!seatClicked.isAvailable) {
      alert('Esse assento não está disponível')
      return
    }

    if (selected.includes(seatClicked.id)) {
      const clicked = selected.filter(id => id !== seatClicked.id)
      setSelected(clicked)
      return
    }

    setSelected([...selected, seatClicked.id])
  }

  const { idSessao } = useParams()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    )

    promise.then(res => setSeats(res.data))
    promise.catch(err => console.log(err))
  }, [])

  return (
    <>
      <h3>Selecione o(s) assento(s)</h3>
      <SeatsContainer>
        <SeatContainer>
          {Array.isArray(seats.seats) &&
            seats.seats.map(seat => (
              <div
                //style={!seat.isAvailable ? { backgroundColor: '#FBE192' } : null}
                style={
                  selected.includes(seat.id)
                    ? { backgroundColor: '#1AAE9E' }
                    : null
                }
                key={seat.id}
                onClick={() => changeColor(seat)}
              >
                <p>{seat.name}</p>
              </div>
            ))}
        </SeatContainer>
        <SeatsInfos>
          <div>
            <Selected></Selected>
            <p>Selecionado</p>
          </div>
          <div>
            <Available></Available>
            <p>Disponível</p>
          </div>
          <div>
            <Unavilable></Unavilable>
            <p>Indisponível</p>
          </div>
        </SeatsInfos>
        <form onSubmit={toReserve}>
          <Inputs>
            <div>
              <p>Nome do comprador:</p>
              <input
                type="text"
                value={name}
                onChange={e => setUserName(e.target.value)}
                placeholder="Digite seu nome..."
                required
              />
            </div>
            <div>
              <p>CPF do comprador:</p>
              <input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                placeholder="Digite seu CPF..."
                required
              />
            </div>
            <Link to="/sucesso">
              <Button type="submit" name="submit">
                <p>Reservar assento(s)</p>
              </Button>
            </Link>
          </Inputs>
        </form>
      </SeatsContainer>
      {seats.movie ? (
        <Footer
          sections={seats.movie}
          hourday={seats.name}
          weekday={seats.day.weekday}
        />
      ) : (
        ''
      )}
    </>
  )
}

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SeatContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  div {
    width: 26px;
    height: 26px;
    background: #c3cfd9; /* ${props => {
      const available = props.availability
      const clicked = props.selection
      const seat = props.chair

      if (!available) {
        return '#FBE192'
      } else {
        return '#c3cfd9'
      }

      if (clicked.includes(seat)) {
        return '#1AAE9E'
      } else {
        return '#c3cfd9'
      }
    }}; */
    border: 1px solid #808f9d;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const SeatsInfos = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 44px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  div > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
  }
`
const Selected = styled.div`
  width: 25px;
  height: 25px;
  background: #1aae9e;
  border: 1px solid #0e7d71;
  border-radius: 17px;
`
const Available = styled.div`
  width: 24px;
  height: 24px;
  background: #c3cfd9;
  border: 1px solid #7b8b99;
  border-radius: 17px;
`
const Unavilable = styled.div`
  width: 24px;
  height: 24px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 17px;
`
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  div > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
    margin-bottom: 4px;
  }

  div > input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
  }

  div > input::placeholder {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: #afafaf;
  }
`
const Button = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  border: none;
  margin-top: 57px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
  }
`
