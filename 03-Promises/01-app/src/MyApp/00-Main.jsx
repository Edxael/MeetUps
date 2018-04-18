import React from 'react'
import './style.css'
let URL = 'https://swapi.co/api/P'

export default class extends React.Component{
    render(){

        const exe1 = async () => {
            console.log("Executing Promise: ")

            const myans = await fetch(URL).then((resp) => { return resp.json() })
                                          .then((resp) => { return resp })
                                          .catch((err) => { console.log("Not in this UNIVERSE...") }) 

            await console.log("My Answer: ", myans)
        }
        
        return(
            <div>
                <h1>Code for Meet-Up.</h1>
                <hr/>

                <button onClick={ exe1 } >Use Promise</button>
            </div>
        )
    }
}