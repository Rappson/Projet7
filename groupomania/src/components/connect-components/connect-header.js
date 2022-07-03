import { React, useEffect, useState, useContext } from 'react';
import { connectRequest } from '../services/callAPI';
import "../../style/connect.css"
import { tokenContext } from '../services/useToken';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link, useNavigate } from "react-router-dom";



function Connect() {
    const navigate = useNavigate();

    const [ IsVisible, setIsVisible ] = useState(false);


    const [ tokenState, settokenState ] = useContext(tokenContext)


    useEffect(() => {
        localStorage.removeItem('jwtToken')
    }, [])

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
        connectRequest(log)
            .then((response) => {
                settokenState(response.data.token)
                navigate(`/homepage`)
            })
            .catch(() => {
                setIsVisible(prevProps => !prevProps)
            })

    }


    return <header>
        <div id="connect" className="d-flex flex-lg-row flex-column align-items-center p-3">
            <Link to={"/"} className="d-md-inline d-none"><img src="/images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></Link>

            {/* formulaire */}
            <form id='form-connect' className="d-flex flex-column flex-md-row align-items-center" onSubmit={handleSubmit}>
                <div id="connect-input" className='d-flex flex-column flex-md-row align-items-center align-self-md-stretch m-2'>
                    <label htmlFor="email" className='m-2 text-white'>Email</label>
                    <input type="text" id="email" name="email" value={log.email} onChange={handleChange} />
                </div>

                <div className='d-flex flex-column flex-md-row align-items-center align-self-md-stretch align-self-center'>
                    <label htmlFor="password" className='m-2 text-white'>Mot de passe</label>
                    <input type="password" id="password" name="password" value={log.password} onChange={handleChange} />

                    <input type="submit" value="Se connecter" id="connect-button" className='m-2 btn btn-primary border border-dark' />
                </div>

            </form>
            <div id='error-content' className={IsVisible ? "visible" : "not-visible"}>L'utilisateur est introuvable ! merci de verifier le mail et/ou le mot de passe</div>
        </div>
    </header>
}

export default Connect;
