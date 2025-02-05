import {createGlobalStyle} from 'styled-components';
import {MyTheme} from './Theme.styled.tsx';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        //background-color: #eaeced;
        background-color: ${MyTheme.colors.gray.dark};
        margin: 0;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`