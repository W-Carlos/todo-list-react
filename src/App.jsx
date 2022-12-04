import { v4 as uuidv4 } from 'uuid'

function App() {
  const list = [
    {id: uuidv4(), task:"Estudar progrmação"},
    {id: uuidv4(), task:"Comprar pão"}
  ]

  console.log(list)

  function inputChange(event) {
    console.log(event.target.value)
  }

  return (
    <div>
      <input onChange={inputChange} type="text" placeholder="O que tenho que fazer..." />
      <button>Adicionar</button>
      
      <ul>
        {
          list.map( (listItem) => {
            return <li key={listItem.id}>{listItem.task}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
