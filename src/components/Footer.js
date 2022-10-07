import styled from 'styled-components'
import Sections from './Sections'

export default function Footer({ sections, hourday, weekday }) {
  return (
    <FooterContainer>
      <div>
        <img src={sections.posterURL} alt="capa do filme" />
      </div>
      <div>
        <p>{sections.title}</p>
        {hourday ? (
          <p>
            {weekday} - {hourday}
          </p>
        ) : (
          ''
        )}
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  height: 117px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 10px;

  div:first-of-type {
    width: 64px;
    height: 89px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 8px;
  }

  > div > img {
    width: 48px;
    height: 72px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #293845;
  }
`
