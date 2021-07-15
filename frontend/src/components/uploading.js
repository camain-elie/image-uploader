import './style/uploading.scss';

function Uploading () {

    return(
        <div className="uploading">
            <h1>Uploading...</h1>
            <div className="uploading__progress-bar">
                <div className="uploading__moving"></div>
            </div>
        </div>
    );
}

export default Uploading;