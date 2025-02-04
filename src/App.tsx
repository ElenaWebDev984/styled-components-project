// @ts-ignore
// @ts-ignore

import './App.css'
import styled from 'styled-components';
import {StyledBtn, SuperButton} from './components/Button.styled.tsx';
import {Link} from './components/Link.styled.tsx';
import { Menu } from './components/Menu.styled.tsx';

function App() {

  return (
      <div className={"App"}>
          <Menu>
              <ul>
                  <li><a href="">item 1</a></li>
                  <li><a href="">item 2</a></li>
                  <li><a href="">item 3</a></li>
              </ul>
          </Menu>

          <Box>
              <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
              <StyledBtn as={"a"} href={"#"}>Link</StyledBtn>
              <StyledBtn>Hello</StyledBtn>
              <SuperButton>Super Button</SuperButton>
          </Box>
      </div>
  )
}

export default App



const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }

${Link} {
    cursor: zoom-in;
}
`







