import Person from "./person";

export default function PersonList({people}) {
    return (
        <div className="container">
            {people.map((person) => <Person {...person}/>)}
        </div>
    )
}