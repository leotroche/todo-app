import styled from 'styled-components'

const TodoCounter = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffffd9;

  span {
    color: #002b5b;
  }

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`

export { TodoCounter }
