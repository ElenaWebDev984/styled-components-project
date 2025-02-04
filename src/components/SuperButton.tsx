import {StyledBtn} from './Button.styled.tsx';
import {MyAnimation} from '../styles/animations/Animations.tsx';
import styled from 'styled-components';

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #e1fd01;
    color: #898787;
    
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;  
    }
`