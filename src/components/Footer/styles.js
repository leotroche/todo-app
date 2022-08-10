import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffffd9;

  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    font-size: 1.7rem;
  }

  svg:hover {
    color: #fff;
  }

  @media screen and (min-width: 600px) {
    font-size: 2rem;

    svg {
      font-size: 2.7rem;
    }
  }
`

export { Footer }
