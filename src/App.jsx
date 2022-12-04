
function App() {
  const list = [
    {id: Math.random(), task:"Estudar progrmação"},
    {id: Math.random(), task:"Comprar pão"}
  ]

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
