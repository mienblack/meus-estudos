import Item from "./Item"

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item name="Orquídea" cor="Branco" />
                <Item name="Margarida" cor="Rosa" />
                <Item/>
            </ul>
        </>
    )
}

export default List