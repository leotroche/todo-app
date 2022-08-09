import * as S from './styles'

function TodoCounter({ todos }) {
  const numberOfTodos = todos.length
  const numberOfCompletedTodos = todos.filter((todo) => todo.completed).length

  return (
    <>
      <S.TodoCounter>
        You have completed {numberOfCompletedTodos} de {numberOfTodos} TODOs
      </S.TodoCounter>
    </>
  )
}

export { TodoCounter }
