import { useState } from "react/cjs/react.development";
import { connectUrl } from "../../url";
import createNewPost from "../formNewPost";

const axios = require('axios');

function Header() {

    const [ post, setPost ] = useState({
        title: '',
        body: ''
    })


    const handleChange = (e) => {
        setPost((prevProps) => ({
            ...prevProps,
            [ e.target.name ]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(post);
    }

    return <header>
        {/* Logo */}
        <div id="connect" className="d-flex flex-row justify-content-between align-items-center p-3">
            <a href={'http://' + connectUrl + '/homepage'}><img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></a>

            {/* Bouton de recherche */}
            <div id="header-center" className="default-menu">
                <form className="form-inline d-flex flex-row my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button id="search-btn" className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                </form>
                <a id="new-post-link" onClick={createNewPost}><i className="fas fa-plus-circle"></i></a>

                <form className="new-post-form not-visible" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Titre</label>
                    <input style={{ width: 285 }} type='text' id="post-title" name="title" onChange={handleChange}></input>

                    <label htmlFor="post-body">Votre message</label>
                    <textarea id="post-body" name='body' onChange={handleChange} cols="35" rows="3"></textarea>
                    <input className="btn-send-new-post" type="submit" value='envoyer' />
                </form>
            </div>

            {/* Menu */}
            <div id="menu">

                <a className="bar-item">Profil</a>
                <a className="bar-item">Paramètres</a>
                <a href={'http://' + connectUrl} className="bar-item">Déconnexion</a>
            </div>
        </div>
    </header>
}

export default Header;