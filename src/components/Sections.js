import styled from 'styled-components'

export default function Sections() {
  return (
    <SectionsContainer>
      <h3>Selecione o horário</h3>
      <div>
        <Schedule>
          <p>Quinta-feira - 24/06/2021</p>
          <Hours>
            <div>
              <p>15:00</p>
            </div>
            <div>
              <p>19:00</p>
            </div>
          </Hours>
        </Schedule>
        <Schedule>
          <p>Sexta-feira - 25/06/2021</p>
          <Hours>
            <div>
              <p>15:00</p>
            </div>
            <div>
              <p>19:00</p>
            </div>
          </Hours>
        </Schedule>
      </div>
    </SectionsContainer>
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
