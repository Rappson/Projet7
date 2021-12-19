function Header() {
    return <header>
        <div id="connect" className="d-flex flex-row align-items-center bg-success p-3">
            <a href="../../public/index.html"><img src="images/icon.png" alt='logo' id="icon-connect"/></a>

            <form className="d-flex flex-row">
            <div id="connect-input" className='m-2'>
                <label htmlFor="email" className='m-2 text-white'>Email</label>
                <input type="text" id="email" name="email"></input>
            </div>

            <div>
                <label htmlFor="password" className='m-2 text-white'>Mot de passe</label>
                <input type="text" id="password" name="password"></input>

                <input type="submit" value="Se connecter" id="connect-button" className='m-2 btn btn-primary border border-dark' />
            </div>
            </form>
        </div>
    </header>
}

export default Header;
