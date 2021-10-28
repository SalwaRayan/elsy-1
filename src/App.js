import React from "react"

import "./styles/global.css"
import Box from "./components/Box"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange = event => {
    this.setState({ heart: this.state.heart = event.target.value })
    this.calculateWater(event.target.value, 0.0008, 120, this.state.heart)
  }
  
  onStepsChange = event => {
    this.setState({ steps: this.state.steps = event.target.value })
    this.calculateWater(event.target.value, 0.00002, 3000, this.state.steps)
  }
  
  onTemperatureChange = event => {
    this.setState({ teperature: this.state.temperature = event.target.value })
    this.calculateWater(event.target.value, 0.02, -10, this.state.temperature)
  }

  calculateWater = (range, num, base, element) => {
    if (range ++) {
      this.state.water += num
    } else if (range --) {
      this.state.water -= num
    }
  }
  

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box status="water" icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />

          {/* Steps */}
          <Box status="steps" icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange} />
          
          {/* Heart */}
          <Box status="heart" icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          
          {/* Temperature */}
          <Box status="temperature" icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTemperatureChange} />
        </div>
      </div>
    )
  }
}

export default App