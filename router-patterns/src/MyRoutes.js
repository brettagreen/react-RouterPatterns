import { Route, Navigate, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from './DogDetails';


function MyRoutes({ doggieDeets }) {

    function getDog(dogName) {
        console.log('dogName', dogName);
        const res = doggieDeets.filter(dog => dog.name === dogName);
        console.log('resFilter', res);
        return res;
    }

    return (
        <Routes>
            <Route path="/dogs" element={<DogList details={doggieDeets}/>}/>
            <Route path="/dogs/:name" element={<DogDetails getDog={getDog}/>} />
            <Route path="/" element={<Navigate replace to="/dogs" />}/>
        </Routes>
    );
}

export default MyRoutes;