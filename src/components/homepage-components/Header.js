import { connectUrl } from "../../url";
import createNewPost from "../formNewPost";

/*
logo de croix d'annulation
<i className="fas fa-times-circle"></i>  

logo de new
<i className="fas fa-plus-circle"></i>
*/

function Header() {


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

                <form className="new-post-form not-visible"></form>
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