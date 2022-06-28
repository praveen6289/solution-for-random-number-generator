// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="generate-button"
              type="button"
              onClick={this.onGenerate}
            >
              Generate
            </button>
          </div>
          <p className="counter">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
