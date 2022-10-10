import styled from 'styled-components'
import back from './img/93634.png'
import {useNavigate} from 'react-router-dom'

export default function BackIcon() {

  let navigate = useNavigate()

  function backPage() {
    navigate(-1)
  }

  return(
    <ImageIcon onClick={backPage} src={back}/>

  )
};

const ImageIcon = styled.img`
  position: absolute;
  width: 30px;
  top: 20px;
  left: 20px;
`