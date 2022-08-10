import { useTodo } from '../hooks/useTodo'
import {
  Footer,
  Header,
  TodoAllCheck,
  TodoCounter,
  TodoForm,
  TodoList,
  Wrapper
} from '../components'
import { TodoContextProvider } from '../context/provider'

function App() {
  const [todos, setTodos] = useTodo('TODO_V1')

  return (
    <>
      <TodoContextProvider value={[todos, setTodos]}>
        <Wrapper>
          <Header>ToDo App</Header>
          <TodoCounter todos={todos} />
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
          {todos.length ? <TodoAllCheck todos={todos} setTodos={setTodos} /> : ''}
          <Footer>By Leonardo Troche</Footer>
        </Wrapper>
      </TodoContextProvider>
    </>
  )
}

export default App
