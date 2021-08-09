import {Header} from "./components/Header"
import {Clock} from "./components/Clock"
import {Footer} from "./components/Footer"
import styled from 'styled-components'

// custom styling using styled-components!
const AppContainer = styled.div`
  margin: 40vh 30vw;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Clock/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
