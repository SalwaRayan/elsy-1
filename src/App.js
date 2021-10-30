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
    let heart = event.target.value
    this.setState({ heart: event.target.value })
    this.calculateWater(heart, this.state.steps, this.state.temperature)
  }
  
  onStepsChange = event => {
    let steps = event.target.value
    this.setState({ steps: event.target.value })
    this.calculateWater(this.state.heart, steps, this.state.temperature)
  }
  
  onTemperatureChange = event => {
    let temperature = event.target.value
    this.setState({ temperature: event.target.value })
    this.calculateWater(this.state.heart, this.state.steps, temperature)
  }

  calculateWater = (heart, steps, temp) => {
    console.log("heart:", heart)
    console.log("steps:", steps)
    console.log("temp:", temp)
    if (this.state.heart >= 120) {
      if (heart > this.state.heart) {
        this.setState({water: this.state.water += 0.0008})
      } else if (heart < this.state.heart) {
        this.setState({water: this.state.water -= 0.0008})
      }
    }

    if (this.state.steps >= 10000) {
      if (steps > this.state.steps) {
        this.setState({water: this.state.water += 0.00002})
      } else if (steps < this.state.steps) {
        this.setState({water: this.state.water -= 0.00002})
      }
    }

    if (this.state.temperature >= 20)
    if (temp > this.state.temperature) {
      this.setState({water: this.state.water += 0.02})
    } else if (temp < this.state.temperature) {
      this.setState({water: this.state.water -= 0.02})
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