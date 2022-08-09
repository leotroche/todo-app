import styled from 'styled-components'

const TodoForm = styled.form`
  display: flex;
  width: 100%;
  height: 4rem;

  input {
    width: 100%;
    height: auto;
    padding: 0 0.75rem;

    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    outline: none;

    ::placeholder {
      color: #a5a5a5;
    }
  }

  button {
    height: auto;
    padding: 0 0.75rem;

    border-radius: 0 0.5rem 0.5rem 0;
    background-color: #1c3879;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: #607eaa;
    }
  }
`

export { TodoForm }
