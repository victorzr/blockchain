import React from 'react'

import './Whacamole/styles.css'

class Whacamole extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillMount() {
    //     console.log(this.state)

    //     this.state.squares.forEach(square => {
    //         square.addEventListener('mousedown', () => {
    //           if (square.id == this.state.hitPosition) {
    //             this.state.result++
    //             this.state.score.textContent = this.state.result
    //             this.state.hitPosition = null
    //           }
    //         })
    //       })
          
    //     this.state.countDownTimerId = this.setInterval(this.state.countDown, 1000)
    //     this.moveMole()
    // }

    // componentDidMount() {
    //     this.setState = {
    //         squares: document.querySelectorAll('.square'),
    //         mole: document.querySelector('.mole'),
    //         timeLeft: document.querySelector('#time-left'),
    //         score: document.querySelector('#score'),
    //         result: 0,
    //         hitPosition: null,
    //         currentTime: 60,
    //         timerId: null
    //     }
    // }
    
    // randomSquare = () => {
    //   this.state.squares.forEach(square => {
    //     square.classList.remove('mole')
    //   })
    
    //   let randomSquare = this.state.squares[Math.floor(Math.random() * 9)]
    //   randomSquare.classList.add('mole')
    
    //   this.state.hitPosition = randomSquare.id
    // }
    
    // moveMole = () => {
    //     this.state.timerId = setInterval(this.randomSquare, 500)
    // }
    
    // countDown = () => {
    //     this.state.currentTime--
    //     this.state.timeLeft.textContent = this.state.currentTime
    
    //     if (this.state.currentTime == 0) {
    //         clearInterval(this.state.countDownTimerId)
    //         clearInterval(this.state.timerId)
    //         alert('GAME OVER! Your final score is ' + this.state.result)
    //     }
    
    // }

    render() {
        return (
            <div align="center">
                <br/><br/>
                <h2>Your score: <span id="score">0</span></h2>
                <h2>Time Left: <span id="time-left">60</span></h2>
                
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