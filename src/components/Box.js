import React from "react"

class Box extends React.Component {
  render() {

    const { status, value, icon, color, unit, max, min, onChange, onWaterChange } = this.props

    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: "100px", color: color }}>
          {icon}
        </span>
        <p>{value}{unit}</p>
        {status !== "water" ? <input type="range" min={min} max={max} value={value} onChange={onChange}/> : ""}
      </div>
    )
  }
}

export default Box
