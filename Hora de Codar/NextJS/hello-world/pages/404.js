import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <h3>Parece que está págim não extiste</h3>
            <Link href='/'>Voltar para a página inicial</Link>
        </>
    )
}