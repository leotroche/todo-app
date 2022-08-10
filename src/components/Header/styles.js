import { motion } from 'framer-motion'
import styled from 'styled-components'

const Header = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffffd9;

  @media screen and (min-width: 600px) {
    font-size: 4rem;
  }
`

export { Header }
