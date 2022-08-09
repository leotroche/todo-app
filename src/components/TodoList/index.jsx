import { TodoItem } from '../TodoItem'
import { AnimatePresence, Reorder } from 'framer-motion'
import * as S from './styles'

function TodoList({ todos, setTodos }) {
  const areThereTodos = todos.length

  if (areThereTodos)
    return (
      <Reorder.Group values={todos} onReorder={setTodos}>
        <S.TodoList>
          <AnimatePresence>
            {todos.map((todo, index) => (
              <Reorder.Item key={todo.id} value={todo}>
                <TodoItem text={todo.text} completed={todo.completed} index={index} />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </S.TodoList>
      </Reorder.Group>
    )
}

export { TodoList }
