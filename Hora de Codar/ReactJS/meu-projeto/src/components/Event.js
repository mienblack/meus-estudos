import Button from "./Button"

function Event({ number }) {
    function myEvent() {
        console.log("Primeiro Evento")
    }

    function secondEvent() {
        console.log("Segundo Evento")
    }

    return (
        <>
            <p>Clique para ativar</p>
            <Button event={myEvent} text="Primeiro evento"/>
            <Button event={secondEvent} text="Segundo evento"/>
        </>
    )
}

export default Event