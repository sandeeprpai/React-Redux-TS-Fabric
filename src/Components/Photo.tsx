import * as React from 'react';
// import '../App.css';

import CSSTransitionGroup from 'react-addons-css-transition-group';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';

import { getClassNames } from '../ClassNames/Photo_classNames';
class Photo extends React.Component<any> {


    constructor(props: any) {
        super(props);
    }

    public render() {

        const { GridFigureCSS, GridPhotoWrapCSS, GridPhotoCSS } = getClassNames();
        const { post, i } = this.props;

        return (
            <figure className={GridFigureCSS}>
                <div className={GridPhotoWrapCSS}>

                    <img src={post.display_src} alt={post.recipeName} className={GridPhotoCSS} />
                    <hr />

                    {/* <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup> */}

                </div>

                <span><b>{post.recipeName}</b></span>
                <hr />

                <span><b>Instructions:</b> {post.recipeInstructions}</span>
                <hr />

                <TooltipHost content="Click to like">
                    <DefaultButton style={{ backgroundColor: 'lightblue', color: 'black' }}
                        onClick={this.props.incrementLikes.bind(this, i)}><b>👍 {post.likes}</b></DefaultButton>
                    <span> </span>
                </TooltipHost>

                <TooltipHost content="Click to show love">
                    <DefaultButton style={{ backgroundColor: '#ffb3b3', color: 'red' }}
                        onClick={this.props.addLove.bind(this, i)}><b>{post.love}</b></DefaultButton>
                </TooltipHost>
            </figure>
        );
    }
}

export default Photo;