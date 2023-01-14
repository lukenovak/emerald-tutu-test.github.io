import Person from "./person";

export default function PersonList({people}) {
    return (
        <div className="text">
            {people.map((person, idx) => <Person key={idx} {...person}/>)}
        </div>
    )
}