import { useParams } from "react-router-dom";

function DogDetails({ getDog }) {

    const { name } = useParams();
    console.log('name', name);

    const dog = getDog(name)[0];
    console.log('dog', dog);
    
    return (
        <div>
            <h3>Name: {dog.name}</h3>
            <h3>Age: {dog.age}</h3>
            <img src={dog.src} alt={dog.name} /><br /><br />
            Facts!
            <ul>
                {dog.facts.map((fact,idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;