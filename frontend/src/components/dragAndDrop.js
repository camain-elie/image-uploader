import { useState } from 'react';

import './style/dragAndDrop.scss';
import image from '../assets/image.svg';

function DragAndDrop (props) {
    const [dragOver, setDragOver] = useState(false);
    const handleDrop = (e) => {
        props.handleDrop(e);
        e.preventDefault();
        e.stopPropagation();
    }
    

    return(
        <div className={`drag-and-drop ${dragOver ? "drag-and-drop--over" : ""}`}
            onDrop={handleDrop}
            onDragEnter={() => setDragOver(true)}
            onDragExit={() => setDragOver(false)}
        >
            <img src={image} alt="generic landscape" />

            <p>{'Drag & Drop your image here'}</p>
        </div>
    );
}

export default DragAndDrop;