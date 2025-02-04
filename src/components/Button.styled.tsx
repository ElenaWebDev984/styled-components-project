import styled from 'styled-components';

// ТИПИЗАЦИЯ
type StyledBtnPropsType = {
    color?: string
    fontSize?: string
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    //background-color: #c023a4;
    background-color: ${props => props.color || "#c023a4"};
    padding: 10px 20px;
    color: snow;
    //font-size: 2rem;
    font-size: ${props => props.fontSize};
    font-weight: bold;

    &:hover {
        background-color: #0f1cef;
    }

    //&:last-child {
    //    background-color: #10c310;
    //}
`


