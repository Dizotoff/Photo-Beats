import React, { Component } from 'react'
import BackgroundVideo from 'react-background-video-player'
import video from '../videos/vhs.mp4'
import domready from 'domready'

if (typeof document !== 'undefined') {
  document.body.style.position = 'absolute'
  document.body.style.margin = '0'
  document.body.style.width = '100%'
  document.body.style.height = '100%'
  document.body.style.overflow = 'hidden'
}

interface PlayerShape {
  windowWidth: any
  windowHeight: any
}

export default class Player extends Component<{}, PlayerShape> {
  player: any
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  render() {
    return (
      <div style={{ position: 'absolute', width: ' 100%', height: '100%' }}>
        {}
        <BackgroundVideo
          ref={p => (this.player = p)}
          containerWidth={this.state.windowWidth}
          containerHeight={this.state.windowHeight}
          src={video}
          startTime={1}
          autoPlay={true}
          volume={0}
        />
      </div>
    )
  }
}
