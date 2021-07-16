import './style/uploaded.scss';

function Uploaded () {

    return(
        <div className="uploaded">
            <div className="uploaded__done">
                <div className="uploaded__tick--one"></div>
                <div className="uploaded__tick--two"></div>
            </div>

            <h1>Uploaded Successfully !</h1>

            <img  ></img>

            <div className="uploaded__link">
                <input />
                <button className="uploaded__copy">Copy Link</button>
            </div>
        </div>
    );
}

export default Uploaded;