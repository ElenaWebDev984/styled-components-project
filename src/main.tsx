import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {GlobalStyles} from './styles/GlobalStyles.tsx';
import {ThemeProvider} from 'styled-components';
import {MyTheme} from './styles/Theme.styled.tsx';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={MyTheme}>
        <App/>
        <GlobalStyles/>
    </ThemeProvider>,
);
