import React, { useState } from 'react';
import Papa from 'papaparse'
import Results from './Components/Results';
import JoslynHeader from './Components/JoslynHeader';
import FileUpload from './Components/FileUpload';

function App() {
  const [results, setResults] = useState('');

  const processData = (data) => {
    const parsedData = Papa.parse(data, {header: true}).data;
    setResults(parsedData);
  }

  return (
    <div className="bg-red-300 font-bold py-2 h-screen w-full min-h-screen min-w-screen flex flex-col items-center justify-center align-center">
      <JoslynHeader/>
      <div className="pt-10 px-10 pb-10">
          <FileUpload className="h-max" processData={processData} />
      </div>
      <div className="overflow-y-auto max-h-screen w-5/6 overflow-x-auto">
        <Results results={results} />
      </div>
    </div>
  );
}


export default App;

