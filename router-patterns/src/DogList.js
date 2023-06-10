function DogList({ details }) {
    return (
        <div>
            <h2>here's a list of all the dogs we got...sorry if you were hoping for more or less or any other amount than that which we can give you.</h2>
            <ul>
                {details.map((dog,idx) => <li key={idx}>{dog.name}</li>)}
            </ul>
        </div>
    );
}

export default DogList;