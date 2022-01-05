import { urlBase } from '../url';
import { useState } from 'react';

function Header() {

    const [ state, setState ] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setState((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        //function to submit
        const response = await fetch(urlBase + '/auth/login', 
        {method: 'POST',
         headers: {'accept': 'application/json', 'content-type' : 'applcation/json'},
         body: JSON.stringify(state)
        })
        if (response.ok){
            console.log(response);
        }
        else {
            console.log('erreur');
        }
    }


    return <header>
        <div id="connect" className="d-flex flex-row align-items-center p-3">
            <a href="localhost:3001"><img src="images/icon.png" alt='logo' id="icon-connect" /></a>

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

export default Header;
