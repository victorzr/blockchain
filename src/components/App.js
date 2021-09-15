import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MemoryGame from '../pages/MemoryGame'
import Whacamole from '../pages/Whacamole'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <Layout >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Memory" component={MemoryGame} />
                  <Route exact path="/Whacamole" component={Whacamole} />
                  <Route exact path="/Snake" component={NotFound} />
                  <Route exact path="/Invaders" component={NotFound} />
                  <Route exact path="/Frogger" component={NotFound} />
                  <Route exact path="/Tetris" component={NotFound} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            </BrowserRouter>
          )
    }
}

export default App;