import { connectUrl } from "../../url";

function Homepage() {
    return <header>
        <div id="connect" className="d-flex flex-row align-items-center p-3">
            <a href={'http://' + connectUrl}><img src="images/icon-left-font-monochrome-white.png" alt='logo' id="icon-connect" /></a>

        </div>
    </header>
}

export default Homepage;