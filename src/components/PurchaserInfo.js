import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function PurchaserInfo(props) {
  const {
    seatsId,
    allInfo,
    setAllInfo
  } = props
  const [name, setUserName] = useState('')
  const [cpf, setCpf] = useState('')
  let navigate = useNavigate()

  function success() {
    setAllInfo({ ...allInfo, cpf: cpf, name: name })
    navigate('/sucesso')
  }

  function toReserve(e) {
    e.preventDefault()

    const requisition = axios.post(
      'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
      {
        ids: { seatsId },
        name: { name },
        cpf: { cpf }
      }
    )

    requisition.then(success)
    requisition.catch(res => console.log(res.data))
  }

  return (
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

        <Button type="submit" name="submit">
          <p>Reservar assento(s)</p>
        </Button>
      </Inputs>
    </form>
  )
}

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
