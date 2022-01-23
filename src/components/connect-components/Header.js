import { urlBase } from '../../url';
import { useState } from 'react';
import { connectUrl } from '../../url';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link, useNavigate } from "react-router-dom";

const axios = require('axios');

function Connect() {
    const navigate = useNavigate ();

    // initialisation de state
    const [ log, setlog ] = useState({
        email: "",
        password: ""
    });

    /* variable pour recuperer les données
     et les envoyer dans le log
     lorsque l'input detecte un changement*/
    const handleChange = (e) => {
        setlog((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    //function to submit
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(urlBase + `/auth/login`, log)
            .then((response) => {

                localStorage.setItem('jwtToken', response.data.token)

                navigate(`/homepage`)

            })
        // .catch(() => document.location.href = 'http://localhost:3000/error')

        /*       test.url@test.com      */
    }


    return <header>
        <div id="connect" className="d-flex flex-row align-items-center p-3">
            <a href={connectUrl}><img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></a>

            {/* formulaire */}
            <form className="d-flex flex-row" onSubmit={handleSubmit}>
                <div id="connect-input" className='m-2'>
                    <label htmlFor="email" className='m-2 text-white'>Email</label>
                    <input type="text" id="email" name="email" value={log.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password" className='m-2 text-white'>Mot de passe</label>
                    <input type="password" id="password" name="password" value={log.password} onChange={handleChange} />

                    <input type="submit" value="Se connecter" id="connect-button" className='m-2 btn btn-primary border border-dark' />
                </div>
            </form>
        </div>
    </header>
}

export default Connect;
