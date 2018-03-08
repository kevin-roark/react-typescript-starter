import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'react-emotion'
import Home from './pages/Home'

const Container = styled('div')`
  box-sizing: border-box;
  padding: 8px;

  & * {
    box-sizing: inherit;
  }
`

const App = () => (
  <Router>
    <Container>
      <Route path="/" exact={true} component={Home} />
    </Container>
  </Router>
)

export default App
