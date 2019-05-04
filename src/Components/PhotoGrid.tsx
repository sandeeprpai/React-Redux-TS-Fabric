import * as React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/Actions/Actions'
import { connect } from 'react-redux';
import logo from '../logo.svg';
import Photo from './Photo';
import '../App.css';


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

                <span className="photo-grid">
                    {this.props.posts.map((post, i) => <Photo {... this.props} key={i} i={i} post={post} />)}
                </span>
            </div>
        );
    }
}

const MapStateToProps = (state: any) => {
    console.log('state:', state);
    return {
        posts: state.posts
    }
}

const MapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(actions, dispatch);
}


// export default PhotoGrid;

export default connect(MapStateToProps, MapDispatchToProps)(PhotoGrid);
