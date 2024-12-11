
export default function Formulario(props) {
    
    return (
        <div className='container'>
            <form onSubmit={props.formFunction} action="#" className='flex_col'>
                <input onChange={(e) => props.setarTitle(e.target.value)} type="text" placeholder='Digite o título da tarefa' />
                <input onChange={(e) => props.setarDesc(e.target.value)} type="text" placeholder='Digite a descrição da tarefa' />
                <button>Adicionar</button>
            </form>
        </div>
    )
}