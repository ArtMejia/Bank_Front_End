import { FC } from "react";
import { moveCursor } from "readline";

export interface PersonProps {
    name: string,
    age: number,
    gender: "Male" | "Female" | "Nonbinary",
}

const mockPerson: PersonProps = {
    name: "Satan", 
    age: 6100000,
    gender: "Male"
}

const Person: FC<{person:PersonProps}> = (props) => {
    return (
        <div style={{
            border: "1px solid black",
            margin: "1em",
            padding: "1.5em",
            minWidth: "300px",
            maxWidth: "500px"
        }}>
           <h1>{props.person.name}</h1>
           <p>{props.person.age}</p>
           <p>{props.person.gender}</p> 
        </div>
    )
}

export default Person