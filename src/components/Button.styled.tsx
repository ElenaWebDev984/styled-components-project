import styled, {css} from 'styled-components';

// ТИПИЗАЦИЯ
type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    //background-color: #c023a4;
    //background-color: ${props => props.color || "#c023a4"};
    padding: 10px 20px;
    //color: snow;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;

    &:hover {
        background-color: #0f1cef;
    }

    //&:last-child {
    //    background-color: #10c310;
    //}
    
    
//    применение нескольких стилей по одному атрибуту
    // интерполяция %{}
    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#c023a4"};
        color: ${props => props.color || "#c023a4"};
        background-color: transparent;
    `}
    
    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#c023a4"};
        color: snow;
    `}
    
    // outline
    // border: 2px solid ${props => props.color || "#c023a4"};
    // color: ${props => props.color || "#c023a4"};
    // background-color: transparent;
    
//    primary
//     background-color: ${props => props.color || "#c023a4"};
//     color: snow;
`


