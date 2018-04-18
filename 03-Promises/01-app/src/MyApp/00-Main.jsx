import React from 'react'
import './style.css'
let URL = 'https://swapi.co/api/people/'

export default class extends React.Component{
    state = { info: '' }
    render(){

        const exe1 = async () => {
            console.log("Executing Promise: ")

            const myans = await fetch( `${URL}${this.state.info}` )
                                    .then((resp) => { return resp.json() })
                                    .then((resp) => { return resp })
                                    .catch((err) => { console.log("Not in this UNIVERSE...") }) 

            await console.log("My Answer: ", myans)
        }
        
        return(
            <div>
                <h1>Code for Meet-Up.</h1>
                <hr/>

                <input type="text" value={this.state.info} onChange={ (e)  => { this.setState({ info: e.target.value }) }}  />
                <br/><br/>

                <button onClick={ exe1 } >Get Data</button>
            </div>
        )
    }
}