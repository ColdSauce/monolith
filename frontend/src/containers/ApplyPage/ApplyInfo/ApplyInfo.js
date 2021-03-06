import React, { Component } from 'react'

import { Link } from '../../../components'

class ApplyInfo extends Component {
  render() {
    return (
      <div>
        <p>We're accepting applications all the time. It's great if your responses to these questions are over 3 sentences long, but make sure you don't write an essay!</p>

        <br />

        <p>Check out our <Link href="/example_applications">example applications</Link> if you want some help!</p>
      </div>
    )
  }
}

export default ApplyInfo
