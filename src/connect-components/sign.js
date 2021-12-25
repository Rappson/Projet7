import { useState } from "react";

function SignIn() {

    const [ state, setState ] = useState({
        nom: "",
        prenom: "",
        email: "",
        birthday: "",
        password: ""
    })

    const handleChange = (e) => {
        setState((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: [ e.target.value ]
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = JSON.stringify(state)
        console.log(data);
        let init = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...data})
        };
        fetch('localhost:3001/api/sign-up', init)
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return <div id="sign-in">
        <div className='bg-success p-5'>
            <div id="message" className="h2 mx-5">S'inscrire</div>


            <form className="mx-5" onSubmit={handleSubmit}>

                <div id="name" className="mt-3">
                    <label htmlFor="nom">Nom&ensp;</label>
                    <input type="text" id="nom" name="nom" value={state.nom} onChange={handleChange}/>

                    <label htmlFor='prenom'>Prénom&ensp;</label>
                    <input type="text" id="prenom" name="prenom" value={state.prenom} onChange={handleChange}/>
                </div>

                <div id="email" className="mt-2 mb-2">
                    <label htmlFor="email">Email&ensp;</label>
                    <input type="email" id="email" name="email" value={state.email} onChange={handleChange}/>
                </div>

                <div id='date'>
                    <label htmlFor="birthday">Date de naissance&ensp;</label>
                    <input type="date" id="birthday" name="birthday" value={state.birthday} onChange={handleChange}/>
                </div>

                <div id="password" className="mt-2 mb-2">
                    <label htmlFor="password">Mot de passe&ensp;</label>
                    <input type="password" id="mdp" name="password" value={state.password} onChange={handleChange}/>
                </div>

                <input type="submit" value="S'inscrire" className='btn btn-primary my-2 border border-dark'></input>
            </form>


        </div>
    </div>
}

export default SignIn