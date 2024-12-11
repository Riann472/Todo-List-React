import './App.css'
import { useState } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {
  let [title, setTitle] = useState();
  let [desc, setDesc] = useState();
  let [ids, setIds] = useState(0)
  let [lista, addLista] = useState([])

  function enviar(e) {
    e.preventDefault();
    setIds(ids + 1)
    addLista((prev) => [...prev, { id: ids, tarefa: title, descricao: desc }])
    console.log(lista)
  }

  return (
    <div className='app'>
      <h1>Gerenciador de Tarefas</h1>
      <Formulario setarTitle={setTitle} setarDesc={setDesc} formFunction={enviar} />

      {lista.length != 0 && (<Resultado setarLista={addLista} lista={lista} />)}
    </div>
  )
}

export default App
