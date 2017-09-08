import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Grommet from 'grommet/components/Grommet'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import GrommetHeader from 'grommet/components/Header'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'

import './index.css'
import 'grommet/grommet.min.css'

const Header = () => (
  <GrommetHeader
    colorIndex="brand"
    justify="start"
    pad={{
      horizontal: 'large',
      vertical: 'medium',
    }}
    align="center"
  >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <Heading style={{ margin: 0 }}>
        Grommet
        <FavoriteIcon
          size="large"
          colorIndex="accent-2"
          style={{ margin: '0 12px' }}
        />
        <span style={{ fontFamily: 'sans-serif' }}>Gatsby</span>
      </Heading>
    </Link>
  </GrommetHeader>
)

const TemplateWrapper = ({ children }) => (
  <Grommet>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Box pad="large">{children()}</Box>
  </Grommet>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
