import { useState } from 'react'
import * as S from './styles'

function TodoForm({ todos, setTodos }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (todos.some((todo) => todo.text === value)) return
    if (!value) return

    const todo = { id: value, text: value, completed: false }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <S.TodoForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="What needs to be done?"
        />
        <button>Add Todo</button>
      </S.TodoForm>
    </>
  )
}

export { TodoForm }
