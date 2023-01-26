import React, { useState } from 'react';
import Papa from 'papaparse';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleFileUpload = event => {
    setFile(event.target.files[0]);
  };

  const processData = data => {
    const parsedData = Papa.parse(data, { header: true }).data;
    return parsedData;
  };

  const handleRunClick = async () => {
    if(!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const data = reader.result;
      const parsedData = processData(data);
      const processedData = parsedData.map(item => {
        return {
            'Client Name': item['Client Name'],
            'Client DOB': item['Client DOB']
        }
    });
      setResults(processedData);
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex items-center justify-center h-1/2">
      <header>
        <h1 className="p-10">CSV File Processor</h1>
      </header>
      <div className="file-upload-container mx-4 my-4 flex flex-col">
        <input className="p-5" type="file" accept=".csv" onChange={handleFileUpload} />
        <button className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-8 rounded-full" onClick={handleRunClick}>
          Run
        </button>
      </div>
    </div>
  );
};

export default FileUpload;





