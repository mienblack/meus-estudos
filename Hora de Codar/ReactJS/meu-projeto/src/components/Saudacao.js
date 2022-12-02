function Saudacao({ name }) {
    function GerarSaudacao(algumNome) {
        return (`Olá ${algumNome}, tudo bem?`)
    }

    return (
        <>{name && <p>{GerarSaudacao(name)}</p>}</>
    )
}

export default Saudacao