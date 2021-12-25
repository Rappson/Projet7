import react, { useState } from 'react';

function Header() {

    const [ state, setState ] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setState((prevProps) => ({
            ...prevProps,
            [ event.target.name ]: event.target.value
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state);
    }


    return <header>
        <div id="connect" className="d-flex flex-row align-items-center bg-success p-3">
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
