import './style/uploaded.scss';

function Uploaded (props) {

    return(
        <div className="uploaded">
            <div className="uploaded__done">
                <div className="uploaded__tick--one"></div>
                <div className="uploaded__tick--two"></div>
            </div>

            <h1>Uploaded Successfully !</h1>

            <img src={props.url} alt="element uploaded"></img>

            <div className="uploaded__link">
                <input readOnly value={props.url} />
                <button 
                    className="uploaded__copy"
                    onClick={() => {navigator.clipboard.writeText(props.url)}}
                >
                        Copy Link
                </button>
            </div>
        </div>
    );
}

export default Uploaded;