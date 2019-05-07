import { mergeStyleSets, keyframes } from '@uifabric/merge-styles';

export interface IAppClassNames {
    AppCSS: string;
    AppHeaderCSS: string;
    AppLogoCSS: string;
    AppTitleCSS: string;
    PhotoGridCSS: string;
}

const spin: string = keyframes({

    '0%': { transform: 'rotate(0deg)', },
    '100%': { transform: 'rotate(360deg)', }
});

export const getClassNames = (): IAppClassNames => {
    return mergeStyleSets({
        AppCSS: {
            textAlign: 'center'
        },
        AppHeaderCSS: {
            backgroundColor: '#222',
            height: '150px',
            padding: '20px',
            color: 'white'
        },
        AppLogoCSS: {
            animationName: spin,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationDuration: '3s',
            height: '80px'
        },
        AppTitleCSS: {
            fontSize: '1.5em',
        },
        PhotoGridCSS: {
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: 'auto'
        }
    });
};