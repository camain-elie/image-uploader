import './style/dragAndDrop.scss';
import image from '../assets/image.svg';

function DragAndDrop () {

    return(
        <div className="drag-and-drop" >
            <img src={image} alt="generic landscape" />

            <p>{'Drag & Drop your image here'}</p>
        </div>
    );
}

export default DragAndDrop;