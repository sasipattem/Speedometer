// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAcclerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevstate => ({
        speed: prevstate.speed + 10,
      }))
    }
  }
  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevstate => ({
        speed: prevstate.speed - 10,
      }))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="speed">Speed is {speed}mph</h2>
        <p className="text">Min Limit 0mph,Max Limit is 200mph</p>
        <div>
          <button className="accleratebtn" onClick={this.onAcclerate}>
            Acclerate
          </button>
          <button className="breakbtn" onClick={this.onBreak}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
