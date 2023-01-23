import Link from "next/link";

import styles from '../styles/Navbar.module.css'

export default function Navabar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/products'>Produtos</Link>
                </li>
                <li>
                    <Link href='/todos'>Tarefas</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}