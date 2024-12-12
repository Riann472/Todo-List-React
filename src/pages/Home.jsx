import Formulario from '../components/Formulario'
import Resultado from '../components/Resultado'
import { useEffect, useState } from 'react'

export default function Home() {

  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [ids, setIds] = useState(0)
  let [lista, addLista] = useState(() => {
    const savedLista = localStorage.getItem('lista')
    return savedLista ? JSON.parse(savedLista) : []
  })

  function enviar(e) {
    if (title === '' || desc === '') {
      alert("Informe um valor nos campos.")
    } else {
      e.preventDefault();
      setIds(ids + 1)
      addLista((prev) => [...prev, { id: ids, tarefa: title, descricao: desc }])
      setTitle('')
      setDesc('')
    }
  }

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista))
  }, [lista])

  return (
    <div className='app'>
      <h1>Gerenciador de Tarefas</h1>
      <Formulario desc={desc} title={title} setarTitle={setTitle} setarDesc={setDesc} formFunction={enviar} />

      {lista.length != 0 && (<Resultado setarLista={addLista} lista={lista} />)}
    </div>
  )
}