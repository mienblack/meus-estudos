function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de Alguma Coisa</h3>
            {itens.length > 0 ?
                (itens.map((item, index) => {
                    return (<p key={index}>{item}</p>)
                }))
                : <p>Não há itens na lista</p>}
        </>
    )
}

export default OutraLista