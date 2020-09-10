import React from 'react'

class Clock extends React.Component {
  state = {
    hours: 4, // RESET TO 0 - CURRENT VALUES ARE PLACE HOLDERS
    minutes: 6, // RESET TO 0 - CURRENT VALUES ARE PLACE HOLDERS
    timeActive: false
  }

  handleStartStopTime = (hours, minutes) => {
    if (this.state.timeActive) {
      this.setState({ timeActive: false })
    } else if (!this.state.Active) {
      this.setState({ timeActive: true })
    }
  }

  handleConvertToDisplay = () => {

  }

  render () {
    return (
      <>
        <h2>{this.state.hours}:{this.state.minutes}</h2>
        <button onClick={() => this.handleStartStopTime(this.state.hours, this.state.minutes)}>Start / Stop</button>
      </>
    )
  }
}

export default Clock
