import React from 'react'

class Clock extends React.Component {
  state = {
    hours: 4, // RESET TO 0 - CURRENT VALUES ARE LAST HOLDERS
    minutes: 6, // RESET TO 0 - CURRENT VALUES ARE LAST HOLDERS
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

    while (this.state.timeActive === true) {
      
    }
  }

  handleConvertToDisplay = () => {

  }

  render () {
    return (
      <>
        <h2>{this.state.hours}:{this.state.minutes}</h2>
        <button>Start / Stop</button>
      </>
    )
  }
}

export default Clock
