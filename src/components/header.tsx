import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = props => {
  const { siteTitle } = props

  return (
    <header
      style={{
        // background: "rebeccapurple",
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          borderBottom: '1px solid #EEE',
        }}
      >
        <h5 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#777',
              textDecoration: 'none',
              fontWeight: 'initial',
            }}
          >
            {siteTitle}
          </Link>
        </h5>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
