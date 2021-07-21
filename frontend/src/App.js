import { useState, useRef } from 'react';

import { sendImage } from './services/upload';
import Upload from './components/upload';
import Uploading from './components/uploading';
import Uploaded from './components/uploaded';

import './App.scss';

const BANANA_BREAD = "https://img.over-blog-kiwi.com/0/93/14/90/20190312/ob_d9a59a_cake-banane-banana-bread.jpg";
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;
const ACCEPTED_FILE_FORMATS = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
const API_URL = "api/upload/???";

const  checkFileSize = (file, maxSizeInBytes) => {
  return(file.size <= maxSizeInBytes);
}

const checkFileType = (file, formats) => {
  let fileExtension = file.name.split('.');
  fileExtension = fileExtension[fileExtension.length-1];
  return formats.includes(fileExtension.toLowerCase());
}

function App() {

  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState();
  const [message, setMessage] = useState('');
  const [uploadingProcessState, setUploadingProcessState] = useState('waiting');
  
  const handleFileUpload = (file) => {
    setMessage('');
    setFile(file);
    sendImage();
  }

  if(file && (!checkFileSize(file, DEFAULT_MAX_FILE_SIZE_IN_BYTES) || !checkFileType(file, ACCEPTED_FILE_FORMATS))){
    let message = '';
    if(!checkFileSize(file, DEFAULT_MAX_FILE_SIZE_IN_BYTES)){
      message = 'The size of the file should not exceed 5.0 Mo';
    }else{
      message = 'Wrong file format, only .jpg (or .jpeg), .png, .gif and .svg are accepted.';
    }
    setFile(null);
    setMessage(message)
  }

  return (
    <div className="app" 
      onDrop={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="app__content" >

        {uploadingProcessState === 'waiting'
          && <Upload message={message} handleFileUpload={(file) => handleFileUpload(file)} />}

        {uploadingProcessState === 'processing'
          && <Uploading />}

        {uploadingProcessState === 'completed'
          && <Uploaded imageURL={imageURL} />}

      </div>
    </div>
  );
}

export default App;
