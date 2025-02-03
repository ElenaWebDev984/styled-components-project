// @ts-ignore
// @ts-ignore

import './App.css'
import styled from 'styled-components';

function App() {

  return (
      <div className={"App"}>
          <Box>
              <StyledBtn>Hello</StyledBtn>
              <SuperButton>Super Button</SuperButton>
          </Box>
      </div>
  )
}

export default App

const StyledBtn = styled.button`
    border: none;
    background-color: #c023a4;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
`

const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #e1fd01;
    color: #898787;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`