import { useContext } from 'react'
import { TodoContext } from '../context/provider'

function useTodoContext() {
  return useContext(TodoContext)
}

export { useTodoContext }
