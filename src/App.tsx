import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import PhotoGrid from './Components/PhotoGrid';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <PhotoGrid />
      </div>
    );
  }
}

export default App;
