import { TodoItem } from '../TodoItem'
import { Reorder } from 'framer-motion'
import * as S from './styles'

function TodoList({ todos, setTodos }) {
  const areThereTodos = todos.length

  if (areThereTodos)
    return (
      <Reorder.Group values={todos} onReorder={setTodos}>
        <S.TodoList>
          {todos.map((todo, index) => (
            <Reorder.Item key={todo.id} value={todo}>
              <TodoItem text={todo.text} completed={todo.completed} index={index} />
            </Reorder.Item>
          ))}
        </S.TodoList>
      </Reorder.Group>
    )
}

export { TodoList }
