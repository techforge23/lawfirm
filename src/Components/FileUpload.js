import React, { useState } from 'react';

const FileUpload = ({processData}) => {
const [file, setFile] = useState(null);

const handleFileUpload = event => {
  setFile(event.target.files[0]);
};
const handleRunClick = async () => {
  if(!file) return;
    const reader = new FileReader();
      reader.onload = async () => {
    const data = reader.result;
    processData(data);
  };
    reader.readAsText(file);
};

return (
      <div className="flex items-center justify-center">
          <header>
            <h1 className="p-10">CSV File Processor</h1>
          </header>
          <div className="file-upload-container mx-4 my-4 flex flex-col">
              <input className="p-5" type="file" accept=".csv" onChange={handleFileUpload}/>
              <button className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-8 rounded-full"
              onClick={handleRunClick}>Run</button>
          </div>
      </div>
  );
};

export default FileUpload;




