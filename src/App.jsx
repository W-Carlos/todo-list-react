import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  ContainerItems,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles";

function App() {
  const [list, setList] = useState([]); // Estado que guarda a lista completa
  const [inputTask, setInputTask] = useState(""); // Estado que guarda o valor do input

  // Função para salvar o valor digitado no input
  function inputChange(event) {
    setInputTask(event.target.value);
  }

  // Função para adicionar o valor digitado na lista
  function addTask() {
    if(inputTask) {
      setList([...list, { id: uuidv4(), task: inputTask, finshed: false }]);
    }
  }

  // Função para marcar tarefa como concluida
  function finishedTask(id) {
    // Novo array que vai modificar algumas informações e substituir o array antigo
    // O spread operatos vai manter todos os itens como estão e alterar apenas o finished
    const newList = list.map((item) =>
      item.id === id ? { ...item, finshed: !item.finshed } : item
    );

    setList(newList);
  }

  // Função para deletar tarefa
  function removeTask(id) {
    const newList = list.filter((item) => {
      if (item.id === id) return false;

      return true;
    });

    setList(newList);
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
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem
                isFinished={item.finshed}
                ischecked={item.finshed}
                key={item.id}
              >
                <Check onClick={() => finishedTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => removeTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <p>Não há itens na lista</p>
          )}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
