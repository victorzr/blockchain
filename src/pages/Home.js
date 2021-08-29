import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <React.Fragment>
            <br/><br/>
            <h3>Win each of these games once to get a NFT-based trophy. All games created by <a href="https://www.twitter.com/ania_kubow">@ania_kubow</a></h3>
            <ol>
                <li>
                    <Link to="/Memory">
                        Memory Game
                    </Link>
                </li>
                <li>
                    <a href="./2. whac-a-mole/index.html">
                        Whac-A-Mole
                    </a>
                </li>
                <li>
                    <a href="./4. Nokia3310-Snake/index.html">
                        Snake
                    </a>
                </li>
                <li>
                    <a href="./5. space-invaders/index.html">
                        Space Invaders
                    </a>
                </li>
                <li>
                    <a href="./6. Frogger/index.html">
                        Frogger
                    </a>
                </li>
                <li>
                    <a href="./7. Tetris/index.html">
                        Tetris
                    </a>
                </li>
            </ol>
            <h3>Total trophies earned: <span id="trophies"></span></h3>
            <h3>Total wins: <span id="wins"></span></h3>
        </React.Fragment>
    );
  }
}