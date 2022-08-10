import * as S from './styles'
import { AiFillGithub } from 'react-icons/ai'

function Footer({ children }) {
  return (
    <>
      <S.Footer>
        {children}
        <a href="https://github.com/leotroche/todo-app" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </S.Footer>
    </>
  )
}

export { Footer }
