import React from 'react'

class Clock extends React.Component {
  state = {
    hours: 4, // RESET TO 0 - CURRENT VALUES ARE LAST HOLDERS
    minutes: 6 // RESET TO 0 - CURRENT VALUES ARE LAST HOLDERS
  }

  handleStartTime = () => {

  }

  handleConvertToDisplay = () => {
    switch (this.state)
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
