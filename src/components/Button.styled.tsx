import styled, {css} from 'styled-components';

// ТИПИЗАЦИЯ
type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    // primary?: boolean
    // outlined?: boolean
    btnType: "primary" | "outlined"
    active?: boolean
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
    

    //&:last-child {
    //    background-color: #10c310;
    //}
    
    
//    применение нескольких стилей по одному атрибуту
    // интерполяция %{}
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#c023a4"};
        color: ${props => props.color || "#c023a4"};
        background-color: transparent;
        
        &:hover {
            border-color: #0f1cef;
            color: #0f1cef;
            background-color: transparent;
        }
    `}
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#c023a4"};
        color: snow;

        &:hover {
            background-color: #0f1cef;
        }
    `}
    
    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(19, 19, 20, 0.76);
    `}
    
    // outline
    // border: 2px solid ${props => props.color || "#c023a4"};
    // color: ${props => props.color || "#c023a4"};
    // background-color: transparent;
    
//    primary
//     background-color: ${props => props.color || "#c023a4"};
//     color: snow;
`


