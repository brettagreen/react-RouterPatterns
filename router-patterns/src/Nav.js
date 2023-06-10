import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav({ names }) {

    return (
        <nav className="navBar">
            {names.map((name,idx) => <NavLink key={idx} className="navBarLink" exact="true" to={`/dogs/${name}`}>
                &nbsp;&nbsp;{name}</NavLink>)}
        </nav>
      );
}

export default Nav;