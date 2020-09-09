import React from 'react';
import Header from './Header';

const listOfPeople = [
    { id: 1, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" },
    { id: 2, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" },
    { id: 3, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" },
    { id: 4, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" },
    { id: 5, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" },
    { id: 6, name: "Maya", age: 23, email: "maya@coso.com", hometown: "barcelona", hobbies: "dancing, singing, playing, watching anime", buddy_patient: "buddy" }
];

const AdminTable = props => {

    let sortedPeople = [...listOfPeople];

    sortedPeople.sort( (a,b) => {
        if( a.name < b.name ) return -1;
        if( a.name > b.name ) return 1;
        
        return 0;
    })

    return (
        <div>
            <Header />
            <div className="container-form">
                <h1>Table of participants</h1>

                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Hometown</th>
                        <th>Hobbies/Interest</th>
                        <th>Buddy or patient?</th>
                    </thead>
                    <tbody>
                        {listOfPeople.map( person => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                                <td>{person.email}</td>
                                <td>{person.hometown}</td>
                                <td>{person.hobbies}</td>
                                <td>{person.buddy_patient}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminTable;