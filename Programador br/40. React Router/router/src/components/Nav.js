import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Link to='/'><h2>Home</h2></Link>
            <ul>
                <li><Link to='/aulas'>Aulas</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
        </div>
    )
}