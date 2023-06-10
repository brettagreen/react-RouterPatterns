import { useParams } from "react-router-dom";

function Color() {

    const { color } = useParams();

    return (
        <div style={{backgroundColor: color}}>
            <h2>HEY LOOK AT ME I'M SO {color.toUpperCase()}</h2>
        </div>
    )

}

export default Color;