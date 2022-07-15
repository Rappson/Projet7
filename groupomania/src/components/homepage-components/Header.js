import { connectUrl } from "../../url";
import "../../style/homepage/header.css"
import { Link } from "react-router-dom";



function Header() {
    const deleteToken = () => {
        localStorage.removeItem('jwtToken');
    }
    
/*     const iconBack = <i className="fa fa-chevron-left"></i>;
    const logo = <img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" />
 */
    return <header>
        {/* Logo */}
        <div id="connect" className="d-flex flex-row justify-content-between align-items-center p-3">
            <Link to={'/homepage'}><img src="/images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></Link>



            {/* Menu */}
            <div id="menu">
                <Link to={'/'} onClick={deleteToken} className="btn d-lg-none bar-item"><i className="fa fa-door-open"></i></Link>
                <Link to={'/'} onClick={deleteToken} className="btn d-none d-lg-inline bar-item">Déconnexion</Link>
            </div>
        </div>
    </header>
}

export default Header;