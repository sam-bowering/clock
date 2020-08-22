import React from 'react'

class Clock extends React.Component {
  state = {
    hours: 4, // RESET TO 0 - CURRENT VALUES ARE PLACE HOLDERS
    minutes: 6, // RESET TO 0 - CURRENT VALUES ARE PLACE HOLDERS
    timeActive: false
  }

  handleStartTime = () => {
    switch (this.state.timeActive) {
      case false:
        this.setState({
          timeActive: true
        })
        break
      case true:
        this.setState({
          timeActive: false
        })
        break
      default:
        break
    }

    function tick () {
      if (this.state.minutes < 60) {
        this.setState({
          minutes: this.state.minutes + 1
        })
      } else if (this.state.hours < 24) {
        this.setState({
          hours: this.state.hours + 1,
          minutes: 0
        })
      }
    }

    while (this.state.timeActive === true) {
      setTimeout(tick, 1000)
    }
  }

  handleConvertToDisplay = () => {

  }

  render () {
    return (
      <>
        <h2>{this.state.hours}:{this.state.minutes}</h2>
        <button onClick={this.handleStartTime}>Start / Stop</button>
      </>
    )
  }
}

export default Clock
