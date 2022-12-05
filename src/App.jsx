import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from './styles'

function App() {
  const [list, setList] = useState([]) // Estado que guarda a lista completa
  const [inputTask, setInputTask] = useState('') // Estado que guarda o valor do input

  // Função para salvar o valor digitado no input
  function inputChange(event) {
    setInputTask(event.target.value)
  }

  // Função para adicionar o valor digitado na lista
  function addTask() {
    setList([ ...list, { id: uuidv4(), task: inputTask } ])
  }

  return (
    <Container>
      <input
        onChange={inputChange}
        type="text"
        placeholder="O que tenho que fazer..."
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {list.map((listItem) => {
          return <li key={listItem.id}>{listItem.task}</li>;
        })}
      </ul>
    </Container>
  );
}

export default App;
