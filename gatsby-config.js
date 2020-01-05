'use strict'

module.exports = {
  siteMetadata: {
    title: 'Photo-Beats',
    description: 'Online visualizer which picks sound from your mic and uses provided images to create audio responsive visualisations',
    keywords: 'music, art, artist, audio, responsive, visuals, easy, online, photos, pictures, images, web, techno, edm, soundcloud',
    siteUrl: 'https://photo-beats.com',
    author: {
      name: 'Dmytro Izotov',
      url: 'https://twitter.com/dizotoff',
      email: 'izotov.dima@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://photo-beats.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
