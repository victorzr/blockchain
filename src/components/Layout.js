import React from 'react';
import Navbar from './Navbar';
import { loadWeb3, loadBlockchainData } from '../helpers/helpers';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: null
        }
    }

    async componentWillMount() {
        await loadWeb3()
        let state = await loadBlockchainData()
        this.setState({ ...state })
    }

    render() {
        if(this.state.account != null) {
            return (
                <React.Fragment>
                    <Navbar account={this.state.account} />
                    {this.props.children}
                </React.Fragment>
            )
        } else return null //No renderizar hasta tener la cuenta
    }
}

export default Layout;