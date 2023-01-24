import Link from "next/link";

export async function getStaticProps(context) {
    const { params } = context
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const todo = await data.json()

    return {
        props: { todo }
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()

    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Todo({ todo }) {

    return (
        <>
            <h1>Exibindo a tarefa {todo.id}</h1>
            <h3>{todo.title}</h3>
            <p>
                Comentário: lalala...
                <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
            </p>
            <p>
                Comentário: lelele...
                <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
            </p>
            <p>
                Comentário: lilili...
                <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
            </p>
        </>
    )
}