import React from 'react'
import { useState } from 'react'
import { genTicket ,sum } from './helper';
import Ticket from './Ticket';

const Lottery = ({n=3 , winCondition}) => {
    const [ticket, setTicket] = useState(genTicket(n));
    // console.log(ticket);
    // console.log(sum(ticket));
    let isWinning = winCondition(ticket);
    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }

  return (
    <div>
        <h1>Lottery Game!</h1>
           <Ticket  ticket={ticket} />
        <button onClick={buyNewTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  )
}

export default Lottery