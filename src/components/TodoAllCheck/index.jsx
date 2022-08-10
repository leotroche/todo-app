import { useState } from 'react'
import * as S from './styles'

function TodoAllCheck({ todos, setTodos }) {
  const [isAllSelected, setIsAllSelected] = useState(false)

  const selectButton = () => {
    const copyTodos = [...todos]
    todos.forEach((todo) => (todo.completed = true))

    setTodos(copyTodos)
    setIsAllSelected(true)
  }

  const deselectButton = () => {
    const copyTodos = [...todos]
    todos.forEach((todo) => (todo.completed = false))

    setTodos(copyTodos)
    setIsAllSelected(false)
  }

  const clearButton = () => {
    if (isAllSelected) setTodos([])
  }

  return (
    <>
      <S.TodoAllCheck>
        {isAllSelected ? (
          <button onClick={deselectButton}>Deselect all</button>
        ) : (
          <button onClick={selectButton}>Select all</button>
        )}

        {isAllSelected ? <button onClick={clearButton}>Clear completed</button> : ''}
      </S.TodoAllCheck>
    </>
  )
}

export { TodoAllCheck }
