import { Link } from "react-router-dom";

function Colors({ colors }) {

    return (
        <>
            <h2>take a gander at all these colors 😍</h2>
            <ul>
                {colors.map((color,idx) => <li><Link key={idx} exact="true" to={`/colors/${color}`}>{color}</ Link></li>)}
            </ul>
        </>
    );

}

export default Colors;