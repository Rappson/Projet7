import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";

import Connect from './header-components/Connect';
import Homepage from './header-components/Homepage';

function Header() {
    return (
            <Router>
                <Switch>
                    <Route path='/' element={Connect()} />
                    <Route path='/homepage' element={Homepage()} />
                </Switch>
            </Router>
        );
}

export default Header;
