import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import BackIcon from './BackIcon'

export default function Success({ allInfo, setAllInfo }) {

  let navigate = useNavigate()

  function backHomeScreen(){
    setAllInfo([])
    navigate('/')
  }
  return (
    <SuccessContainer>
    <BackIcon />
      <h2>
        Pedido feito <br /> com sucesso!
      </h2>
      <PurchaserData>
        <div>
          <h4>Filme e sessão</h4>
          <p>
            {allInfo.movie} <br />
            {allInfo.day} {allInfo.time}
          </p>
        </div>
        <div>
          <h4>Ingressos</h4>
          {allInfo.seats.map(s => (
            <p key={s}> Assento {s}</p>
          ))}
        </div>
        <div>
          <h4>Comprador</h4>
          <p>
            Nome: {allInfo.name} <br />
            CPF: {allInfo.cpf}
          </p>
        </div>
      </PurchaserData>
      <Link to="/">
        <button onClick={backHomeScreen}>
          <p>Voltar pra Home</p>
        </button>
      </Link>
    </SuccessContainer>
  )
}

const SuccessContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #247a6b;
    text-align: center;
    margin-bottom: 42px;
  }

  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    margin-top: 82px;
  }

  button > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
  }
`
const PurchaserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin-left: -90px;

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #293845;
  }
`
