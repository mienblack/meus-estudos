import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import List from './components/List'
import Modal from "./components/Modal"
import listReducer from './reducers/listReducer'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const SAVED_ITEMS = "savedItems"

function persistedState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if (actualState) {
        return JSON.parse(actualState)
    } else {
        return []
    }
}

const store = createStore(listReducer, loadState())

store.subscribe(() => {
    persistedState(store.getState())
})

export default function App() {
    const [showModal, setShowModal] = useState(false)

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <Provider store={store}>
            <div className='container'>
                <header className='header'>
                    <h1>TODO</h1>
                    <button className='addButton' onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List />
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onHideModal={onHideModal} ></TodoForm>
                </Modal>
            </div>
        </Provider>
    )
}