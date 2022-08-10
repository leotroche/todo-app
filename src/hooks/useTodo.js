import { useEffect, useState } from 'react'

function useTodo(key) {
  const [todos, setTodos] = useState(() => {
    const restoredTodos = localStorage.getItem(key)
    const parsedTodos = JSON.parse(restoredTodos)

    return parsedTodos || []
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos))
  }, [todos])

  const setLocalStorage = (newTodos) => {
    setTodos(newTodos)
  }

  return [todos, setLocalStorage]
}

export { useTodo }
