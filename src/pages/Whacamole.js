import React from 'react'
import { loadWeb3, loadBlockchainData } from '../helpers/helpers';

import './Whacamole/styles.css'

class Whacamole extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await loadWeb3()
        let blockchainData = await loadBlockchainData()
        this.state = {
            ...blockchainData,
            squares: document.querySelectorAll('.square'),
            mole: document.querySelector('.mole'),
            timeLeft: document.querySelector('#time-left'),
            score: document.querySelector('#score'),
            result: 0,
            hitPosition: null,
            currentTime: 30,
            timerId: null,
            winningScore: 30
        }

        this.state.squares.forEach(square => {
            square.addEventListener('mousedown', () => {
              if (square.id == this.state.hitPosition) {
                square.classList.add('hit')
                this.state.result++
                this.state.score.textContent = this.state.result
                this.state.hitPosition = null
              }
            })
          })
          
        this.state.countDownTimerId = setInterval(this.countDown, 1000)
        this.moveMole()
    }
    
    randomSquare = () => {
      this.state.squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('hit')
      })
    
      let randomSquare = this.state.squares[Math.floor(Math.random() * 9)]
      randomSquare.classList.add('mole')
    
      this.state.hitPosition = randomSquare.id
    }
    
    moveMole = () => {
        this.state.timerId = setInterval(this.randomSquare, 500)
    }
    
    countDown = () => {
        this.state.currentTime--
        this.state.timeLeft.textContent = this.state.currentTime
    
        if (this.state.currentTime == 0) {
            clearInterval(this.state.countDownTimerId)
            clearInterval(this.state.timerId)
            this.gameOver()
        }
    
    }

    gameOver = () => {
        if(this.state.result < this.state.winningScore) {
            alert("We're sorry! You've lost the game")
        }
        else {
            //Trophy image
            let tokenURI = "https://e7.pngegg.com/pngimages/307/524/png-clipart-whack-a-mole-mole-hunt-whac-a-mole-jump-rope-many-times-think-number-geuss-your-number-motor-cycle-shooter-bullets-heading-game-video-game-thumbnail.png"
            this.state.token.methods.mint(
              this.state.account,
                tokenURI
              )
              .send({ from: this.state.account })
            alert('Congratulations! You\'ve earned a trophy which can be seen on the main page')
        }
    }

    render() {
        return (
            <div align="center">
                <br/><br/>
                <h3>Reach a final score of 30 to win the game</h3>
                <h4>Your score: <span id="score">0</span></h4>
                <h4>Time Left: <span id="time-left">30</span></h4>
                
                <div className="whac-grid">
                    <div className="square" id="1"></div>
                    <div className="square" id="2"></div>
                    <div className="square" id="3"></div>
                    <div className="square" id="4"></div>
                    <div className="square" id="5"></div>
                    <div className="square" id="6"></div>
                    <div className="square" id="7"></div>
                    <div className="square" id="8"></div>
                    <div className="square" id="9"></div>
                </div>
            </div>
        )
    }
}

export default Whacamole