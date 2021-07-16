import './style/uploading.scss';

function Uploading () {

    return(
        <div className="uploading">
            <h1>Uploading...</h1>
            <div className="uploading__progress-bar">
                <div className="uploading__moving first"></div>
                <div className="uploading__moving second"></div>
                <div className="uploading__moving third"></div>
            </div>
        </div>
    );
}

export default Uploading;