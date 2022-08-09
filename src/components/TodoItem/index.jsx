import * as S from './styles'
import { useTodoContext } from '../../hooks/useTodoContext'
import { MdClose, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

function TodoItem({ id, text, completed, index }) {
  const [todos, setTodos] = useTodoContext()

  const completeTodo = (text) => {
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
      <S.Div
        initial="hidden"
        animate="visible"
        exit="hidden"
        layoutId={id}
        variants={S.variants}
        custom={{ delay: (index + 1) * 0.1 }}
        completed={completed}
      >
        <S.Span completed={completed} onClick={() => completeTodo(text)}>
          {completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </S.Span>

        <p>{text}</p>

        <S.Span onClick={() => deleteTodo()}>
          <MdClose />
        </S.Span>
      </S.Div>
    </>
  )
}

export { TodoItem }
