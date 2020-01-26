import React from 'react'

interface AudioInput {}

const AudioInput: React.FC<AudioInput> = () => {
  let src
  if (typeof window !== 'undefined') {
    let context = new AudioContext()
    let analyser = context.createAnalyser()
    let array = new Uint8Array(64)

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        src = context.createMediaStreamSource(stream)
        src.connect(analyser)
      })
      .catch(error => {
        alert(error + 'OTKLONENO')
      })
    analyser.getByteFrequencyData(array)
  }
  return <div></div>
}

export default AudioInput
