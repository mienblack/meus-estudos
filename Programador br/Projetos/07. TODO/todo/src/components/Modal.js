import Card from "./Card"

export default function Modal(props) {

    function hideModal(e) {
        let target = e.target
        if (target.id === "modal") {
            props.onHideModal()
        }
        console.log(target)
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
            <Card className="card-modal">
                {props.children}
            </Card>
        </div>
    )
}