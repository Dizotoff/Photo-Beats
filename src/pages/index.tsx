import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Player from '../components/Player'


const IndexPage = () => {
  return (
    <IndexLayout>
      <Player />

      <Page>
        <Container>
          <div>
            <div
              style={{
                height: `100vh`,
                margin: '15px',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h1>Live synchronised music video right in your browser</h1>
            </div>
          </div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
