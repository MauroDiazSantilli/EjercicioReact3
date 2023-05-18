import React, {useState} from "react";

function Saludo(){
 const [msj, setMsj] = useState("")

 const Clickear = () => {
    setMsj("(from changed state)!")
 }

return(
    <div>
        <h1>Hello My Friend {msj}</h1>
        <button onClick={Clickear}>Click me</button>
    </div>
)

}

export default Saludo;