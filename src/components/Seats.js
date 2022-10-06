import styled from 'styled-components'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Seats() {
  return (
    <>
      <h3>Selecione o(s) assento(s)</h3>
      <SeatsContainer>
        <SeatContainer>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>15</p>
          </div>
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
        <Inputs>
          <div>
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." />
          </div>
          <div>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..." />
          </div>
        </Inputs>
        <Link to="/sucesso">
        <button type="submit" name="cancel" value="Cancel">
          <p>Reservar assento(s)</p>
        </button>
        </Link>
      </SeatsContainer>
      <Footer />
    </>
  )
}

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    margin-top: 57px;
  }

  button > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
  }
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
