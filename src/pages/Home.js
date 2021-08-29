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
                    <Link to="/Whacamole">
                        Whac-A-Mole
                    </Link>
                </li>
                <li>
                    <Link to="/Snake">
                        Snake
                    </Link>
                </li>
                <li>
                    <Link to="/Invaders">
                        Space Invaders
                    </Link>
                </li>
                <li>
                    <Link to="/Frogger">
                        Frogger
                    </Link>
                </li>
                <li>
                    <Link to="/Tetris/">
                        Tetris
                    </Link>
                </li>
            </ol>
            <h3>Total trophies earned: 0</h3>
        </React.Fragment>
    );
  }
}