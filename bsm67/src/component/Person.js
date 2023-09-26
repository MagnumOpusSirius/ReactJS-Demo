import React from "react";

function Person({person, key}) {
    return (
        <div className="person-cont">
            {/* <h2>
                {person.id}: I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2> */}
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                </tr>
                <tr>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.skill}</td>
                </tr>   
            </table>
        </div>
    )
}

export default Person