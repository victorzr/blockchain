import Web3 from 'web3'
import MyToken from '../abis/HogToken.json'

export async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    }
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

export async function loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    const account = accounts[0]
    let token = null
    let totalSupply = null
    let tokenURIs = []

    // Load smart contract
    const networkId = await web3.eth.net.getId()
    //console.log(networkId)
    const networkData = MyToken.networks[networkId]
    if (networkData) {
        const abi = MyToken.abi
        const address = networkData.address
        token = new web3.eth.Contract(abi, address)
        //this.setState({ token })
        totalSupply = await token.methods.totalSupply().call()
        //this.setState({ totalSupply })
        // Load Tokens
        let balanceOf = await token.methods.balanceOf(accounts[0]).call()
        for (let i = 0; i < balanceOf; i++) {
            let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call()
            let tokenURI = await token.methods.tokenURI(id).call()
            tokenURIs = [...tokenURIs, tokenURI]
        }
    } else {
        alert('Smart contract not deployed to detected network.')
    }

    let state = {
        account,
        token,
        totalSupply,
        tokenURIs
    }

    return state
}