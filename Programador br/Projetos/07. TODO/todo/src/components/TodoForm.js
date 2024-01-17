import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../actions/listAction'

export default function TodoForm(props) {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    function handleChange(event) {
        let t = event.target.value
        setText(t)
    }

    function onAddItem(event) {
        event.preventDefault()
        if (text) {
            dispatch(addItem(text))
            setText("")
            props.onHideModal()
        }
    }
    return (
        <form>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={onAddItem}>Add</button>
        </form>
    )
}