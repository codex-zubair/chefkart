import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableRow from '../TableRow/TableRow';

const Table = () => {

    // Fetching data 
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('MOCK_DATA.json').then(res =>
                res.json()
            )
    })


    // useEffect(()=> {
    //     fetch('MOCK_DATA.json')
    //     .then(res=> res.json)
    //     .then(data=> setData())
    // }, [])



    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>First Name
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current rotate-90"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
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



                    <TableRow data={data}></TableRow>

                </tbody>

            </table>
        </div>
    );
};

export default Table;