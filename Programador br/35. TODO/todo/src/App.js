import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import List from './components/List'
import Item from './components/Item'
import Modal from "./components/Modal"
import './App.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const SAVED_ITEMS = "savedItems"

export default function App() {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
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

        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {

        let updateItems = items.map(it => {
            if (it.id === item.id) {
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
        <Provider store={store}>
            <div className='container'>
                <header className='header'>
                    <h1>TODO</h1>
                    <button className='addButton' onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List onDone={onDone} />
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm />
                </Modal>
            </div>
        </Provider>
    )
}