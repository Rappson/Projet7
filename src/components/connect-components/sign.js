import { useState } from "react";
import { signupRequest } from "../services/callAPI";
import "../../style/connect.css"

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link, useNavigate } from "react-router-dom";

function SignIn() {
const navigate = useNavigate();

const [ isSuccess, setIsSuccess ] = useState({
    message: '',
    success: null
})
    // initialisation de sign
    const [ sign, setSign ] = useState({
        name: "",
        firstName: "",
        email: "",
        birthday: "",
        password: ""
    })

    /* variable pour recuperer les données et les envoyer dans le sign
 lorsque l'input detecte un changement*/
    const handleChange = (e) => {
        setSign((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    //function to submit
    const handleSubmit = (e) => {
        e.preventDefault()
        signupRequest(sign)
        .then(() => {
            setIsSuccess({
                message: 'Votre inscription à été validé ! Vous pouvez dorénavant vous connecter',
                success: true
            })
        })
        .catch((response) => {
            setIsSuccess({
                message: 'Un probleme est survenue, merci de vérifier les informations',
                success: false
            })
        })

    }

    /* SI le message est null rien faire
    SINON appeler la fonction "" qui retournera un message d'ereur ou de succée en fonction du résultat */
    

    return <div id="sign-in">
        <div className='p-5'>
            <div id="message" className="h2 mx-5 text-white">S'inscrire</div>

            {/* formulaire */}
            <form className="mx-5" onSubmit={handleSubmit}>

                <div id="name" className="mt-3">
                    <label htmlFor="name" className="text-white">Nom&ensp;</label>
                    <input type="text" id="name" className="mr-1" name="name" value={sign.name} onChange={handleChange} />

                    <label htmlFor='firstName' className="text-white">Prénom&ensp;</label>
                    <input type="text" id="firstName" name="firstName" value={sign.firstName} onChange={handleChange} />
                </div>

                <div id="email" className="mt-2 mb-2">
                    <label htmlFor="email" className="text-white">Email&ensp;</label>
                    <input type="email" id="email" name="email" value={sign.email} onChange={handleChange} />
                </div>

                <div id='date'>
                    <label htmlFor="birthday" className="text-white">Date de naissance&ensp;</label>
                    <input type="date" id="birthday" name="birthday" value={sign.birthday} onChange={handleChange} />
                </div>

                <div id="password" className="mt-2 mb-2">
                    <label htmlFor="password" className="text-white">Mot de passe&ensp;</label>
                    <input type="password" id="mdp" name="password" value={sign.password} onChange={handleChange} />
                </div>

                <input type="submit" value="S'inscrire" className='btn btn-primary my-2 border border-dark'></input>
            </form>
        </div>
        <div id="success-message" className={isSuccess.success ? "text-success" : "text-danger"}>
            <p>{isSuccess.message}</p>
        </div>
    </div>
}

export default SignIn