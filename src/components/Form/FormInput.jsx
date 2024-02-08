import { useState } from "react"



const FormInput = ()=>{
    const [input, setInput] = useState('') 
    console.log(input);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Realizar acciones adicionales según tus necesidades
        console.log("Formulario enviado con valor:", input);
        if(handleSubmit){
            setInput('')
        }
    };


    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
            Nombre de usuario
                <input type="text" value={input} onInput={(evt)=> setInput(evt.target.value)} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormInput;