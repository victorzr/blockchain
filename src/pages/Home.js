import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadWeb3, loadBlockchainData } from '../helpers/helpers';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tokenURIs: [],
        }
    }

    async componentWillMount() {
        await loadWeb3()
        let state = await loadBlockchainData()
        this.setState({ ...state })
    }

    render() {
        return (
            <React.Fragment>
                <br /><br />
                <h3>Win each of these games once to get a NFT-based trophy which will be displayed in the main page.</h3>
                <h4>All games were adapted from <a href="https://www.twitter.com/ania_kubow">@ania_kubow</a></h4>
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
                    {/* <li>
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
                    </li> */}
                </ol>
                <h3>Total trophies earned: {this.state.tokenURIs.length}</h3>

                { this.state.tokenURIs.map((tokenURI, key) => {
                      return(
                        <div>
                            <img
                            key={key}
                            src={tokenURI}
                            />
                            <br />
                            <br />
                        </div>
                      )
                    })}

            </React.Fragment>
        );
    }
}