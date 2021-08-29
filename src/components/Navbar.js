import React from 'react'
import { Link } from 'react-router-dom';

import brain from '../brain.png'
import './styles/App.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({ account: this.props.account })
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                        <img src={brain} width="30" height="30" className="d-inline-block align-top" alt="" />
                        <span>&nbsp; NFT Tokens</span>
                    </Link>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                            <small className="text-muted"><span id="account">{this.state.account}</span></small>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar