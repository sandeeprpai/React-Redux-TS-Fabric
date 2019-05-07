import { mergeStyleSets, keyframes } from '@uifabric/merge-styles';

export interface IPhotoClassNames {
    GridFigureCSS: string;
    GridPhotoWrapCSS: string;
    GridPhotoCSS: string;
    LikeHeartCSS: string;
}

const spin: string = keyframes({

    '0%': { transform: 'rotate(0deg)', },
    '100%': { transform: 'rotate(360deg)', }
});

export const getClassNames = (): IPhotoClassNames => {
    return mergeStyleSets({
        GridFigureCSS: {
            flexBasis: 'calc(25%)',
            flexShrink: 0,
            margin: '2rem 1rem 1rem 2rem',
            padding: '1rem',
            background: 'beige',
            boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
            position: 'relative',
        },
        GridPhotoWrapCSS: {
            position: 'relative'
        },
        GridPhotoCSS: {
            width: '300px',
            height: '150px'
        },
        LikeHeartCSS : {
            
        }
    });
};