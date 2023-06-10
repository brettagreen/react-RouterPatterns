import { Route, Navigate, Routes } from "react-router-dom";
import Color from "./Color";
import Colors from './Colors';
import NewColorForm from './NewColorForm';


function MyRoutes({ colors, addColor }) {

    return (
        <Routes>
            <Route path="/colors" element={<Colors colors={colors} />}/>
            <Route path="/colors/:color" element={<Color />} />
            <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>} />
            <Route path="/" element={<Navigate replace to="/colors" />}/>
        </Routes>
    );
}

export default MyRoutes;