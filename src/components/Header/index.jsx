import * as S from './styles'

function Header({ children }) {
  return (
    <>
      <S.Header
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          type: 'spring'
        }}
      >
        {children}
      </S.Header>
    </>
  )
}

export { Header }
