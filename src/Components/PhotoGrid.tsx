import * as React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Photo from './Photo';


class PhotoGrid extends React.Component<any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        debugger;

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to RecipeBook</h1>
                </header>
                <Photo />
            </div>
        );
    }
}


export default PhotoGrid;
