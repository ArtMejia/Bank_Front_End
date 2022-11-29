import { FC } from "react";
import Person, { PersonProps } from "./Person";

const mockPersonList:PersonProps[] = [
    {
        name: "Hanna",
        age: 25,
        gender: "Female"
    },
    {
        name: "Art",
        age: 34,
        gender: "Male"
    },
    // {
    //     name: "Jeff",
    //     age: 30,
    //     gender: "Nonbinary"
    // },
    {
        name: "Satan", 
        age: 6100000,
        gender: "Male"
    }
]

const Persons: FC = () => {
    const displayPersons = () => {
        return mockPersonList.map(
            person => <Person person={person}/>
        )
    }
    return (
        <div style={{
            display: "flex", 
            width: "100%",
            backgroundColor: "lightblue",
            flexDirection: "column",
            alignItems: "center"
           }}>
           <h1>Persons</h1>
           <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
           }}>
                {displayPersons()}
                {/* <Person person={{
                    name: "Hanna",
                    age: 25,
                    gender: "Female"
                }}/>
                <Person person={{
                    name: "Art",
                    age: 34,
                    gender: "Male"
                }}/>
                <Person person={{
                    name: "Jeff",
                    age: 30,
                    gender: "Nonbinary"
                }}/> */}
           </div>

        </div>
    )
}

export default Persons