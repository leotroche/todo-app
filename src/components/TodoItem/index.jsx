import * as S from './styles'
import { useTodoContext } from '../../hooks/useTodoContext'
import { MdClose, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

function TodoItem({ id, text, completed, index }) {
  const [todos, setTodos] = useTodoContext()

  const completeTodo = () => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => todo.text !== text)
    setTodos(newTodos)
  }

  return (
    <>
      <S.TodoItem
        initial="hidden"
        animate="visible"
        exit="hidden"
        layoutId={id}
        variants={S.variants}
        custom={{ delay: (index + 1) * 0.1 }}
        completed={completed}
      >
        <span onClick={() => completeTodo()}>
          {completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </span>

        <p>{text}</p>

        <span onClick={() => deleteTodo()}>
          <MdClose />
        </span>
      </S.TodoItem>
    </>
  )
}

export { TodoItem }
