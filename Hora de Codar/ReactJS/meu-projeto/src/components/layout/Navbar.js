import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul className={styles.list}>
            <li>
                <Link className={styles.item} to="/">Home</Link>
            </li>
            <li>
                <Link className={styles.item} to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link className={styles.item} to="/contato">Contato</Link>
            </li>
        </ul>
    )
}

export default Navbar