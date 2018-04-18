import React from 'react'

export default class extends React.Component{
    render(){

        const exe1 = () => {
            console.log("Executing Promise: ")

        }
        
        return(
            <div>
                <h1>Code for Meet-Up</h1>
                <hr/>

                <button onClick={ exe1 } >Use Promise</button>
            </div>
        )
    }
}