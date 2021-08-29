import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout'
import Home from '../pages/Home'
import MemoryGame from '../pages/MemoryGame'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <Layout account="aaa">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Memory" name="Memory Game" component={MemoryGame} />
                </Switch>
              </Layout>
            </BrowserRouter>
          )
    }
}

export default App;