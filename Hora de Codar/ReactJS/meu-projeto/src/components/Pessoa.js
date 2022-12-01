function Pessoa({name, age, job, src}) {
    return (
        <div>
            <img src={src} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
        </div>
    )
}

export default Pessoa