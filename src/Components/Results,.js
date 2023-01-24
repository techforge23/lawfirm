import React from 'react'

function Results({results}) {
    return (
        <textarea
            value={results} 
            readOnly 
            className="w-4/5 h-64 bg-gray-200 px-4 py-4 mx-auto border rounded border-black shadow"
            />
    )
}

export default Results;