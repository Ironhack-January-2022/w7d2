import logo from './logo.svg'
import { useState } from 'react'
import './App.css'

function App(props) {
  // this is not allowed -> props are read only
  // props.title = 'some other title'

  // const array = useState(0)
  // const count = array[0]
  // const setter = array[1]
  // console.log(array) // -> ['value', 'setter function']

  // this creates a state variable and a setter function
  const [counter, setCounter] = useState(0)
  const [liked, setLiked] = useState(false)

  const counterHandler = () => {
    console.log('click')
    // increment count
    // counter = 1 -> we don't want to mutate state directly ❌
    // counter ++ -> this would also mutate the state ❌ -> it's really counter = counter + 1


    // we pass the new value as a parameter to the setter
    setCounter(counter + 1)

    // if you use the current state to compute the new state then 
    // the setter should get a function as a parameter
    // setCounter((currentState, currentProps) => currentState + 1)

    // setCounter(counter => counter + 1)
  }

  const likeHandler = () => {
    setLiked(currentState => !currentState)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{props.title}</h1> */}
        <h1>{liked ? 'I like this component' : 'I do not like this component'}</h1>
        <button onClick={likeHandler}>{liked ? 'Unlike' : 'Like'}</button>
        <h1>Counter: {counter}</h1>
        <button onClick={counterHandler}>Click me 👇</button>
      </header>
    </div>
  )
}

export default App
