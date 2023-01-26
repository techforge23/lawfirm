import React, { useState } from 'react';
import Papa from 'papaparse'
import Results from './Components/Results';
import JoslynHeader from './Components/JoslynHeader';
import FileUpload from './Components/FileUpload';

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');

  const processData = (data) => {
    const parsedData = Papa.parse(data, {header: true}).data;
    setResults(parsedData);
  }

  return (
    <div className="bg-gray-300 font-bold py-2 h-screen w-full min-h-screen min-w-screen flex flex-col items-center justify-center align-center">
      <JoslynHeader/>
      <FileUpload setFile={setFile} processData={processData} />
      <Results results={results} />
    </div>
  );
}


export default App;
