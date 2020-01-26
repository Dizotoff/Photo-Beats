import * as React from 'react'
import { Canvas } from 'react-three-fiber'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Three from '../components/Three'
import AudioInput from '../components/AudioInput'

const VisualizerPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Three position={[-1.2, 0, 0]} />
          <Three position={[1.2, 0, 0]} />
        </Canvas>
        <AudioInput />
      </Container>
    </Page>
  </IndexLayout>
)

export default VisualizerPage
