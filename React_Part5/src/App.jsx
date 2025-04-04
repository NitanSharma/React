import './App.css'
import Lottery from './Lottery'
import {sum} from './helper'

function App() {
  // Function as a prop
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
     <Lottery  winCondition={winCondition}/>
    </>
  )
}

export default App
