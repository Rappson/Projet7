import { urlBase } from "../url";
import { useState } from "react";

function SignIn() {

    const [state, setState] = useState({
        name: "",
        firstName: "",
        email: "",
        birthday: "",
        password: ""
    })

    const handleChange = (e) => {
        setState((prevProps) => ({
            ...prevProps,
            [e.target.name]: [e.target.value]
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = JSON.stringify(state)
        console.log(data);
        let init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ ...state })
        };
        const response = fetch(urlBase + `/auth/signup`, init)
        if (response.ok) {
            // react-router-dom

            // reaction lorsque l'envoi a la base de donnée est un succé 
        } else {
            console.log("erreur");
        }

    }

    return <div id="sign-in">
        <div className='p-5'>
            <div id="message" className="h2 mx-5 text-white">S'inscrire</div>


            <form className="mx-5" onSubmit={handleSubmit}>

                <div id="name" className="mt-3">
                    <label htmlFor="name" className="text-white">Nom&ensp;</label>
                    <input type="text" id="name" className="mr-1" name="name" value={state.name} onChange={handleChange} />

                    <label htmlFor='firstName' className="text-white">Prénom&ensp;</label>
                    <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={handleChange} />
                </div>

                <div id="email" className="mt-2 mb-2">
                    <label htmlFor="email" className="text-white">Email&ensp;</label>
                    <input type="email" id="email" name="email" value={state.email} onChange={handleChange} />
                </div>

                <div id='date'>
                    <label htmlFor="birthday" className="text-white">Date de naissance&ensp;</label>
                    <input type="date" id="birthday" name="birthday" value={state.birthday} onChange={handleChange} />
                </div>

                <div id="password" className="mt-2 mb-2">
                    <label htmlFor="password" className="text-white">Mot de passe&ensp;</label>
                    <input type="password" id="mdp" name="password" value={state.password} onChange={handleChange} />
                </div>

                <input type="submit" value="S'inscrire" className='btn btn-primary my-2 border border-dark'></input>
            </form>


        </div>
    </div>
}

export default SignIn