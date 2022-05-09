import { connectUrl } from "../../url";
import "../../style/homepage/header.css"



function Header() {
    const deleteToken = () => {
        localStorage.removeItem('jwtToken');
    }
    
    const iconBack = <i className="fa-solid fa-arrow-left"></i>;
    const logo = <img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" />

    return <header>
        {/* Logo */}
        <div id="connect" className="d-flex flex-row justify-content-between align-items-center p-3">
            <a href={'http://' + connectUrl + '/homepage'}>{logo}</a>

            {/* Bouton de recherche */}
            <div id="header-center" className="default-menu">
                <form className="form-inline d-flex flex-row my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button id="search-btn" className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                </form>

            </div>

            {/* Menu */}
            <div id="menu">
                <a href={'http://' + connectUrl} onClick={deleteToken} className="bar-item">Déconnexion</a>
            </div>
        </div>
    </header>
}

export default Header;