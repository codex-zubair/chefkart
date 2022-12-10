import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import TableRow from '../TableRow/TableRow';

const Table = () => {


    const [person, setPerson] = useState([])

    // Fetching data 
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('MOCK_DATA.json').then(res =>
                res.json().then(data => setPerson(data)).then(r => 0)
            )
    })



    // Ascending sorting data
    const dataSortAscending = (person) => {

        setPerson([...person].sort(function (a, b) {
            if (a.first_name < b.first_name) {
                return -1;
            }
            if (a.first_name > b.first_name) {
                return 1;
            }
            return 0;
        }));

    }


    // Ascending sorting data
    const  dataSortDescending =  (person)=> {

        setPerson([...person].sort(function (a, b) {
            if (a.first_name > b.first_name) {
              return -1;
            }
            if (a.first_name < b.first_name) {
              return 1;
            }
            return 0;
          }));

        }



    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>First Name
                            <button className="">


                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current rotate-90"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                                        <li onClick={() => dataSortAscending(person)} className='py-2 flex text-center'><a>Sort By ASC</a></li>
                                        <li onClick={() => dataSortDescending(person)}  className='py-2 flex text-center'><a>Sort By DESC</a></li>
                                    </ul>
                                </div>

                            </button>

                        </th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th>IP Address</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>



                    <TableRow data={person} ></TableRow>

                </tbody>

            </table>
        </div>
    );
};

export default Table;