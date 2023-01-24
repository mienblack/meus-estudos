import { useRouter } from "next/router";

export default function Comment() {
    const router = useRouter()

    const todoId = router.query.todoId
    const commentId = router.query.commentId


    return (
        <>
            <h2>
                Exibindo comentário {commentId}
            </h2>
            <h4>
                da tarefa {todoId}
            </h4>
        </>
    )
}