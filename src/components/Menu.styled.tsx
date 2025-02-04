import styled from 'styled-components';

export const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        
        //комбинаторы
        li > a {
            color: green;
        }
        
        // братский селектор(li, который идет перед li)
        li + li {
            margin-left: 20px;
        }
    }
`