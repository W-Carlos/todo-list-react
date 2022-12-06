import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, ContainerItems, Input, Button, ListItem } from "./styles";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

function App() {
  const [list, setList] = useState([]); // Estado que guarda a lista completa
  const [inputTask, setInputTask] = useState(""); // Estado que guarda o valor do input

  // Função para salvar o valor digitado no input
  function inputChange(event) {
    setInputTask(event.target.value);
  }

  // Função para adicionar o valor digitado na lista
  function addTask() {
    setList([...list, { id: uuidv4(), task: inputTask }]);
  }

  return (
    <Container>
      <ContainerItems>
        <Input
          onChange={inputChange}
          type="text"
          placeholder="O que tenho que fazer..."
        />
        <Button onClick={addTask}>Adicionar</Button>

        <ul>
          {list.map((item) => ( 
             <ListItem>
              <FcCheckmark />
              <li key={item.id}>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
