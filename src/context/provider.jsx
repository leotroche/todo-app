import { createContext } from 'react'
const TodoContext = createContext('')

function TodoContextProvider({ children, value }) {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoContextProvider }
