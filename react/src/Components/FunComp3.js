import React from 'react'

function FunComp3() {
    let boys = ['Chintu','Mintu','Montu',"Bunty"]
    let girls = ['Aish',"Deepika","Anjali","Ramya"]
    return (
        <div>
            <h1>FunComp3</h1>
            <h2>List of Boys</h2>
            <ol>
                {boys.map(x => <li key={x}> {x} </li>)}
            </ol>
            <h2>List of Girls</h2>
            <ol>
                {girls.map(x => <li key={x}> {x} </li>)}
            </ol>
        </div>
    )
}

export default FunComp3
