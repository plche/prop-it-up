import './PersonCard.css';
function PersonCard(props) {
    const {person: {id, firstName, lastName, age, hairColor}, incAgeByOne} = props;
    return(
        <div className="PersonCard">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => incAgeByOne(id)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;