import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }
        

const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
        name: "",
        email: "",
        message: "",    
    })
}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>

            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>

            </div>

            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea value={formData.message} name="message" id="message" onChange={handleChange}/>

                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default ContactForm
