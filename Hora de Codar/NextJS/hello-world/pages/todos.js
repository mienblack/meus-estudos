import styles from '../styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()

    return {
        props: { todos }
    }
}

export default function Todos({ todos }) {
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <ul className={styles.todolist}>
                {todos.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })}
            </ul>
        </>
    )
}