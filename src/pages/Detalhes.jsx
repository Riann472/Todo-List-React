import styles from './Detalhes.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Detalhes() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const title = searchParams.get('title')
    const desc = searchParams.get('desc')

    return (
        <div className={styles.principal}>
            <div className={styles.quebrada}>
                <button onClick={() => navigate(-1)}><FaAngleLeft /></button>
                <h1>Detalhes da tarefa</h1>
            </div>

            <div className="container">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}