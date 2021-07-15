import './components/upload';
import './components/uploaded';
import './components/uploading';

import './App.scss';
import Uploading from './components/uploading';

function App() {
  return (
    <div className="app">
      <div className="app__content" >
        <Uploading />
      </div>
    </div>
  );
}

export default App;
