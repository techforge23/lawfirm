import React from 'react'

function Results({ results }) {
    if (!results) {
        return <div></div>;
    }

    const rows = results.map((result, index) => {
    return (
        <tr key={index}>
            <td className="px-4 py-4">{result['Client Name']}</td>
            <td className="px-4 py-4">{result['Client DOB']}</td>
        </tr>
    );
});

    return (
        <table className="w-4/5 h-64 mx-auto border rounded border-black shadow overflow-x-auto">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-4">Client Name</th>
                    <th className="px-4 py-4">Client DOB</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Results;



