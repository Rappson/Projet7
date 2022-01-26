import { connectUrl } from "../../url";

/*
logo de croix d'annulation
<i class="fas fa-times-circle"></i>  */

function Header() {

    const createNewPost = () => {
        /*.new-post-form: opacity 1 */
        /* header-center: heigth 10rem */
        let headerCenter = document.querySelector('.rolled-up')
        let postForm = document.querySelector('.new-post-form')

        postForm.innerHTML = `<label htmlFor="post-title">Titre</label>
    <input style={{ width: 285 }} type='text' id="post-title" name="post-title"></input>

    <label htmlFor="post-body">Votre message</label>
    <textarea id="post-body" cols="35" rows="3"></textarea>
    <button type="submit">Envoyer</button>`
        if (headerCenter) {
            headerCenter.classList.replace('rolled-up', 'unroll')
            postForm.classList.replace('not-visible', 'visible')
        } else {
            headerCenter = document.querySelector('.unroll')
            headerCenter.classList.replace('unroll', 'rolled-up')
            postForm.classList.replace('visible', 'not-visible')

        }


    }

    return <header>
        {/* Logo */}
        <div id="connect" className="d-flex flex-row justify-content-between align-items-center p-3">
            <a href={'http://' + connectUrl + '/homepage'}><img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></a>

            {/* Bouton de recherche */}
            <div id="header-center" className="rolled-up">
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