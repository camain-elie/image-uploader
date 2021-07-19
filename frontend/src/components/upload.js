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
        let file;
        if(e.target.type === "file"){
            file = e.target.files[0];
            setImg(e.target.files[0]);
        }else{
            file = e.dataTransfer.files[0];
            setImg(e.dataTransfer.files[0]);
        }
        setImg(file);
        props.handleFileUpload(file);
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

            {props.message && <p className="upload__message" >{props.message}</p>}

            {img && <img style={{width: '100%'}} src={URL.createObjectURL(img)} alt="preview" />}
        </div>
    );
}

export default Upload;