import { useState } from "react"

export function Contador(){

    const[contador, setContador] = useState(0);
    
    function aumentar(){
        setContador(contador + 1);
    }
    
    function diminuir(){
        setContador(contador - 1 );
    }

    return(
        <div className='container'>
            <h3>{contador}</h3>
            { contador > 9 ? <h1>Já Chega!</h1> : null}
            <button className = "myButton" onClick = {aumentar}>Aumentar</button>
            <br/>
            <br/>
            <button className = "myButton" onClick = {diminuir}>Diminuir</button>
        </div>
    )
}