import React from 'react'

function FuncComp2() {
    let msg = 'Learning react';
    let trainer = "Kiran kumar"
    let client ="Cisco"

    return (
        <div>
              <h1>FunComp2</h1>
              <p>{msg}</p>
              <p>Trainer: {trainer}</p> 
              <p>Client: {client}</p>         
        </div>
    )
}

export default FuncComp2
