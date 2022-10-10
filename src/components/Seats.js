import styled from 'styled-components'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PurchaserInfo from './PurchaserInfo'
import BackIcon from './BackIcon'

function Seat(props) {
  const { seat, id, name, availability, selected, changeColor } = props
  return (
    <div
      style={
        selected.includes(id)
          ? { backgroundColor: '#1AAE9E' }
          : !availability
          ? { backgroundColor: '#FBE192' }
          : null
      }
      onClick={() => changeColor(seat)}
    >
      <p>{name}</p>
    </div>
  )
}

export default function Seats({setAllInfo, allInfo}) {
  const [seats, setSeats] = useState([])
  const [selected, setSelected] = useState([])
  const [seatNumber, setSeatNumber] = useState([])


  function changeColor(seatClicked) {
    if (!seatClicked.isAvailable) {
      alert('Esse assento não está disponível')
      return
    }

    if (selected.includes(seatClicked.id)) {
      const clicked = selected.filter(id => id !== seatClicked.id)
      setSelected(clicked)
    }

    if (seatNumber.includes(seatClicked.name)) {
      const clicked = seatNumber.filter(id => id !== seatClicked.name)
      setSeatNumber(clicked)
      setAllInfo({...allInfo, seats: clicked})
      return
    }

    setAllInfo({...allInfo, seats: [...seatNumber, seatClicked.name ]})
    setSelected([...selected, seatClicked.id])
    setSeatNumber([...seatNumber, seatClicked.name ])
  }

  const { idSessao } = useParams()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    )

    promise.then((res) => {setSeats(res.data)
    setAllInfo({...allInfo, movie: res.data.movie.title, day: res.data.day.date, time: res.data.name})})
    promise.catch(err => console.log(err))
  }, [])

  return (
    <>
    <BackIcon />
      <h3>Selecione o(s) assento(s)</h3>
      <SeatsContainer>
        <SeatContainer>
          {Array.isArray(seats.seats) &&
            seats.seats.map(seat => (
              <Seat
                key={seat.id}
                seat={seat}
                id={seat.id}
                name={seat.name}
                availability={seat.isAvailable}
                selected={selected}
                changeColor={changeColor}
              />
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

        <PurchaserInfo
          seatsId={selected}
          allInfo={allInfo}
          setAllInfo={setAllInfo}

        />
      </SeatsContainer>
      {seats.movie ? (
        <Footer
          sections={seats.movie}
          hourDay={seats.name}
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
    background: #c3cfd9;
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
