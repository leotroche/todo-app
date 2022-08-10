import styled from 'styled-components'
import { motion } from 'framer-motion'

const TodoItem = styled(motion.div)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  /* cursor: all-scroll; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: transform 0.2s ease;

  :hover {
    transform: scale(1.05);
  }

  :hover span:last-child {
    opacity: 1;
  }

  ${({ completed }) => (completed ? `p { text-decoration: line-through; }` : '')}
  ${({ completed }) => (completed ? `transform: scale(1.025);` : '')}

  p {
    width: 100%;
  }

  span {
    cursor: pointer;
    transition: transform 0.2s ease;
    transform: scale(0.9);

    :hover {
      transform: scale(1.25);
    }

    :first-child {
      margin-right: 0.5rem;
      ${({ completed }) => (completed ? `color: #080; transform: scale(1.1)` : '')}
    }

    :first-child:hover {
      color: #080;
    }

    :last-child {
      margin-left: 0.5rem;
      opacity: 0;
    }

    :last-child:hover {
      color: #c00;
    }
  }

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`

// const Span = styled.span``

// animations for Framer Motion
const variants = {
  hidden: {
    opacity: 0
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      duration: 0.25,
      delay
    }
  })
}

export { TodoItem, variants }
