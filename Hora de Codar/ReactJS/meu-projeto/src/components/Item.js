import PropTypes from "prop-types"

function Item({name, cor}) {
    return (
        <>
            <li>{name} - {cor}</li>
        </>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    cor: PropTypes.string
}

Item.defaultProps = {
    name: "Flor",
    cor: "Cor"
}

export default Item