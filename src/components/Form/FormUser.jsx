import { useState } from "react";
import './FormUser.modules.css'

const FormInput = ({ onCreate }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Formulario enviado con valores:", nombre, email, telefono);

        if (onCreate) {
        onCreate({ nombre, email, telefono });
        }

        setNombre("");
        setEmail("");
        setTelefono("");
    };

    return (
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nombre">
            Nombre:
            <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </label>
        
        <label htmlFor="email">Mail:
        <input
            type="email"
            id="email"
            name="email"
            required
            pattern="^\S+@\S+\.\S+$"
            title="Por favor, introduce una dirección de correo electrónico válida"
            value={email}
            placeholder="Ej: hola@thempo.com"
            onChange={(e) => setEmail(e.target.value)}
        />
        </label>

        <label htmlFor="telefono">Teléfono:
        <input
            type="tel"
            id="telefono"
            name="telefono"
            pattern="[0-9]{11}"
            required
            title="Por favor, introduce un número de teléfono válido en el formato XXX-XXXX-XXXX"
            value={telefono}
            placeholder="Ej: 01112341234"
            onChange={(e) => setTelefono(e.target.value)}
        />
        </label>

        <button className="baseButton" type="submit">Comprar</button>
        </form>
    );
};

export default FormInput;
