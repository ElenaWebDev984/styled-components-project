import './App.css'
import styled from 'styled-components';
import {StyledBtn} from './components/Button.styled.tsx';
import {Link} from './components/Link.styled.tsx';
import {MyTheme} from './styles/Theme.styled.tsx';


function App() {

    return (
      <div className={"App"}>
          <Box>
              {/*<StyledBtn color="green" fontSize={"20px"}>Hello</StyledBtn>*/}
              {/*<StyledBtn color="red">Hello</StyledBtn>*/}
              {/*<StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

              <StyledBtn color={MyTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
              <StyledBtn color={MyTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
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
    
//    АДАПТИВ
    @media ${MyTheme.media.tablet} {
        flex-direction: column;
    }
`







