import Upload from './components/upload';
import Uploading from './components/uploading';
import Uploaded from './components/uploaded';

import './App.scss';

const BANANA_BREAD = "https://img.over-blog-kiwi.com/0/93/14/90/20190312/ob_d9a59a_cake-banane-banana-bread.jpg";

function App() {
  return (
    <div className="app">
      <div className="app__content" >
        <Upload />
      </div>
    </div>
  );
}

export default App;
