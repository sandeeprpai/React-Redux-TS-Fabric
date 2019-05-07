import * as React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/Actions/Actions'
import { connect } from 'react-redux';
import logo from '../logo.svg';
import Photo from './Photo';
// import '../App.css';


import { getClassNames } from '../ClassNames/App_classNames';

class PhotoGrid extends React.Component<any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        debugger;
        const { AppHeaderCSS, AppLogoCSS, AppTitleCSS, PhotoGridCSS } = getClassNames();

        return (
            <div>
                <header className={AppHeaderCSS}>
                    <img src={logo} className={AppLogoCSS} alt="logo" />
                    <h1 className={AppTitleCSS}>Welcome to RecipeBook</h1>
                </header>

                <span className={PhotoGridCSS}>
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
