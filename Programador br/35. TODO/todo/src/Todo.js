import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import List from './List'
import Item from './Item'
import  Modal from "./Modal"
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo() {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let item = new Item(text)
        setItems([...items, item])
        onHideModal()
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)
    }

    function onDone(item) {

        let updateItems = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done
            }
            return it
        })        
        setItems(updateItems)
    }

    function onHideModal(e) {
        setShowModal(false)
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1>TODO</h1>
                <button className='addButton' onClick={() => {setShowModal(true)}}>+</button>
            </header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo