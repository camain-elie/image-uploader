import DragAndDrop from './dragAndDrop';
import { useState, useRef } from 'react';

import './style/upload.scss';

function Upload (props) {

    const [img, setImg] = useState();

    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    }

    const handleFileUpload = (e) => {
        if(e.target.type === "file"){
            setImg(e.target.files[0]);
        }else{
            setImg(e.dataTransfer.files[0]);
        }
        
    }

    return(
        <div className="upload">

            <h1>Upload your image</h1>

            <p className="upload__file-desc">File must be Jpeg, Png, Gif or Svg</p>

            <div className="upload__drop">

            </div>

            <DragAndDrop handleDrop={handleFileUpload} />

            <p className="upload__or">Or</p>

            <input type="file" ref={inputFile} onChange={handleFileUpload} />
            <button onClick={onButtonClick} >Choose a file</button>

            {img && <img style={{width: '100%'}} src={URL.createObjectURL(img)} alt="preview" />}
        </div>
    );
}

export default Upload;