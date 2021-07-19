import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

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
  let fileExtention = file.name.split('.');
  fileExtention = fileExtention[fileExtention.length-1];
  return formats.includes(fileExtention.toLowerCase());
}

function App() {



  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState();
  const [message, setMessage] = useState('');
  const [uploadingProcessState, setUploadingProcessState] = useState('waiting');

  if(file && !checkFileSize(file, DEFAULT_MAX_FILE_SIZE_IN_BYTES)){
    setFile(null);
    setMessage('The size of the file should not exceed 5.0 Mo');
  }

  if(file && !checkFileType(file, ACCEPTED_FILE_FORMATS)){
    setFile(null);
    setMessage('Wrong file format, only .jpg (or .jpeg), .png, .gif and .svg are accepted.')
  }

  return (
    <div className="app" 
      onDrop={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="app__content" >

        {uploadingProcessState === 'waiting'
          && <Upload message={message} handleFileUpload={(file) => setFile(file)} />}

        {uploadingProcessState === 'processing'
          && <Uploading />}

        {uploadingProcessState === 'completed'
          && <Uploaded imageURL={imageURL} />}

      </div>
    </div>
  );
}

export default App;
