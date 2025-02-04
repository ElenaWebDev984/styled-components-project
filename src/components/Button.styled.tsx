import styled from 'styled-components';

export const StyledBtn = styled.button`
    border: none;
    background-color: #c023a4;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #0f1cef;
    }

    &:last-child {
        background-color: #10c310;
    }
`


export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #e1fd01;
    color: #898787;
`