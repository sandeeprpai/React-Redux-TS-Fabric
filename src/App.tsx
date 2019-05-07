import * as React from 'react';
// import './App.css';

import PhotoGrid from './Components/PhotoGrid';

import { getClassNames } from './ClassNames/App_classNames';

class App extends React.Component {
  public render() {
    const { AppCSS } = getClassNames();
    return (
      <div className={AppCSS}>
        <PhotoGrid />
      </div>
    );
  }
}

export default App;
