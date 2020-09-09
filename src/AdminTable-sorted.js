import React from 'react';
import Header from './Header';

const useSortableData = (listOfPeople, config = null) => {
    const [ sortConfig, setSortConfig ] = React.useState(null);
    
    const sortedItems = React.useMemo( () => {
        let sortedPeople = [...listOfPeople];
    
        if( sortConfig !== null) {
            sortedPeople.sort( (a,b) => {
                if( a[sortConfig.key] < b[sortConfig.key] ) return sortConfig.direction === 'ascending' ? -1 : 1;
                if( a[sortConfig.key] > b[sortConfig.key] ) return sortConfig.direction === 'ascending' ? 1 : -1;
                
                return 0;
            })
        }

        return sortedPeople;
    }, [listOfPeople, sortConfig] );

    const requestSort = key => {
        let direction = 'ascending';
        if ( sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
    
        setSortConfig({key, direction});
    }

    return { items: sortedItems, requestSort, sortConfig };
}


const AdminTable = props => {

    const { listOfPeople } = props;
    const { items, requestSort } = useSortableData(listOfPeople);


    return (
        <div>
            <Header />
            <div className="container-form">
                <h1>Table of participants</h1>

                <table>
                    <thead>
                        <th>
                            <button type="button" onClick={ () => requestSort('name') }>Name</button>
                        </th>
                        <th>
                            <button type="button" onClick={ () => requestSort('age') }>Age</button>
                        </th>
                        <th>
                            <button type="button" onClick={ () => requestSort('email') }>Email</button>
                        </th>
                        <th>
                            <button type="button" onClick={ () => requestSort('hometown') }>Hometown</button>
                        </th>
                        <th>
                            <button type="button" onClick={ () => requestSort('hobbies') }>Hobbies/Interest</button>
                        </th>
                        <th>
                            <button type="button" onClick={ () => requestSort('buddy') }>Buddy or patient?</button>
                        </th>
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