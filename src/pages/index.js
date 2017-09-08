import React from 'react'
import Link from 'gatsby-link'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'

const IndexPage = () => (
  <Box>
    <Heading tag="h1">Hi people</Heading>
    <Paragraph margin="none">
      Welcome to your new Grommet Gatsby site.
    </Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <Link to="/page-2/">Go to page 2</Link>
  </Box>
)

export default IndexPage
