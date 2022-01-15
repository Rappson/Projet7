import { urlBase } from '../../url';
import { useState } from 'react';

function Connect() {

    // initialisation de state
    const [ state, setState ] = useState({
        email: "",
        password: ""
    });

    /* variable pour recuperer les données
     et les envoyer dans le state
     lorsque l'input detecte un changement*/
    const handleChange = (e) => {
        setState((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    //function to submit
    const handleSubmit = (e) => {
        e.preventDefault()
        let init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(state)};

        const response = fetch(urlBase + `/auth/login`, init)

        // reaction lorsque l'envoi a la base de donnée est un succé
        if (response.ok) {
            console.log('cool');
        }
        else {
            console.log('not cool');
        }
    }


    return <header>
        <div id="connect" className="d-flex flex-row align-items-center p-3">
            <a href="localhost:3001"><img src="images/icon.png" alt='logo' id="icon-connect" /></a>

            {/* formulaire */}
            <form className="d-flex flex-row" onSubmit={handleSubmit}>
                <div id="connect-input" className='m-2'>
                    <label htmlFor="email" className='m-2 text-white'>Email</label>
                    <input type="text" id="email" name="email" value={state.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password" className='m-2 text-white'>Mot de passe</label>
                    <input type="password" id="password" name="password" value={state.password} onChange={handleChange} />

                    <input type="submit" value="Se connecter" id="connect-button" className='m-2 btn btn-primary border border-dark' />
                </div>
            </form>
        </div>
    </header>
}

export default Connect;
