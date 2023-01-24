import React, { useState } from 'react';
import Papa from 'papaparse'

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');

  const processData = (data) => {
    const parsedData = Papa.parse(data, {header: true}).data;
    return parsedData;
  }

  const handleFileUpload = event => {
    setFile(event.target.files[0]);
  };

  const handleRunClick = async () => {
    // Code to read file and process the data
    const reader = new FileReader();
    reader.onload = async () => {
      const data = reader.result;
      // Perform any data processing and store the results in a variable
      const parsedData = processData(data);
      const processedData = parsedData.map(item => `Client Name: ${item['Client Name']}, Client DOB: ${item['Client DOB']}`).join('\n');
      setResults(processedData);
    };
    reader.readAsText(file);
  };


  return (
    <div className="bg-gray-300 font-bold py-2 h-screen w-full min-h-screen min-w-screen flex flex-col items-center justify-center align-center">
      <header>
        <h1 className='p-10'>CSV File Processor</h1>
      </header>
      <div className="file-upload-container mx-4 my-4 flex flex-col">
        <input className='p-5' type="file" accept=".csv" onChange={handleFileUpload} />
        <button className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-8 rounded-full" onClick={handleRunClick}>Run</button>
      </div>
      <textarea 
        value={results} 
        readOnly 
        className="w-4/5 h-64 bg-gray-200 px-4 py-4 mx-auto border rounded border-black shadow" 
      />
    </div>
  );
}

export default App;
