import { useState, useEffect, useRef } from 'react'
//Gerenciar estados de um valor - state
//Faz algo a partir de uma ação - effect
// - ref

import './App.css'

function App() {
  const [name, setName] = useState("Damien")
  const [number, setNumber] = useState(1)

  const oldNumberRef = useRef()

  const numberRef = useRef(0)

  const buttonRef = useRef()

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }

  //1. useEffect utilização
  useEffect(() => {
    console.log("Roda a cada renderização")
    //Não renderiiza  o componente
    numberRef.current = parseInt(Math.random() * 10)
  })

  //2. Array de dependências
  useEffect(() => {
    console.log("Só roda ao incrementar valor")
    //Referência ao valor anterior
    oldNumberRef.current = number
  }, [number])

  //3. array dep vazio
  useEffect(() => {
    console.log("Só executa uma vez")
    //Referência para elemento DOM
    buttonRef.current.click()
  }, [])

  //4. clean up function
  useEffect(() => {

    const timer = setTimeout(() => {
      console.log(`O contador foi alterado ${number} vezes`)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [number])

  //5. fetch 

  return (
    <div className="App">
      <h3>My name is {name}</h3>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <div>
        <h5>Number: {number}</h5>
        <h6>O número anterior era {oldNumberRef.current}</h6>
        <button ref={buttonRef} onClick={changeNumber}>Change Number</button>
      </div>
      <div>Random Number: {numberRef.current}</div>
    </div>
  )
}

export default App
