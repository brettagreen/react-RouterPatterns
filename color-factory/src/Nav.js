import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav({ colors }) {

    return (
        <nav className="navBar">
            <NavLink className="navBarLink" exact="true" to="/colors">Look at all of your colors!</NavLink>&nbsp;&nbsp;
            {colors.map((color,idx) => <NavLink key={idx} className="navBarLink" exact="true" to={`/colors/${color}`}>
                &nbsp;&nbsp;{color}</NavLink>)}&nbsp;&nbsp;
            <NavLink className="navBarLink" exact="true" to="/colors/new">Add a new color</NavLink>
        </nav>
      );
}

export default Nav;