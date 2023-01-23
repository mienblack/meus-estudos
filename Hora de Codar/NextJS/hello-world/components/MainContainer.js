import Navabar from "./Navbar";
import Footer from "./Footer";

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({ children }) {
    return (
        <div className={styles.container}>
            <Navabar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}