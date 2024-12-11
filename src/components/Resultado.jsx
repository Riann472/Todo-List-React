import { FaChevronRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

export default function Resultado(props) {

    return (
        <div className='container'>
            <ul>
                {props.lista.map((item, i) => (
                    <li key={i}><button className="task">{item.tarefa}</button><button><FaChevronRight /></button><button onClick={() => {
                        props.setarLista(() => props.lista.filter((_, index) => index !== i));
                    }}><FaTrash /></button></li>
                ))}
            </ul>
        </div>
    )
}