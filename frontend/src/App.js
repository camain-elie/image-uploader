import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Upload from './components/upload';
import Uploading from './components/uploading';
import Uploaded from './components/uploaded';

import './App.scss';

const BANANA_BREAD = "https://img.over-blog-kiwi.com/0/93/14/90/20190312/ob_d9a59a_cake-banane-banana-bread.jpg";
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;
const API_URL = "api/upload/???";


function App() {

  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState();
  const [uploadingProcessState, setUploadingProcessState] = useState('waiting');

  return (
    <div className="app" 
      onDrop={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="app__content" >

        {uploadingProcessState === 'waiting'
          && <Upload />}

        {uploadingProcessState === 'processing'
          && <Uploading />}

        {uploadingProcessState === 'completed'
          && <Uploaded imageURL={imageURL} />}

      </div>
    </div>
  );
}

export default App;
