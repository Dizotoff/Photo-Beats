import React from 'react'

interface AudioInput {}

const AudioInput: React.FC<AudioInput> = () => {
  let src
  if (typeof window !== 'undefined') {
    let context = new AudioContext()
    let analyser = context.createAnalyser()
    let dataArray = new Uint8Array(64)

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        src = context.createMediaStreamSource(stream)
        src.connect(analyser)
      })
      .catch(error => {
        alert(error + 'OTKLONENO')
      })

    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
    setTimeout(() => {
      analyser.getByteFrequencyData(dataArray)
      console.log(dataArray)
    }, 1000)
  }
  return <div></div>
}

export default AudioInput
