import DragAndDrop from './dragAndDrop';

import './style/upload.scss';

function Upload (props) {

    return(
        <div className="upload">

            <h1>Upload your image</h1>

            <p className="upload__file-desc">File should be Jpeg, Png...</p>

            <div className="upload__drop">

            </div>

            <DragAndDrop />

            <p className="upload__or">Or</p>

            <button>Choose a file</button>
        </div>
    );
}

export default Upload;