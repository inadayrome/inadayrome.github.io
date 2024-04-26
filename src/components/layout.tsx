/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.scss';
import { LinkButtons } from './commonComponents';
import { ThemeContext, theme } from '../constants';

interface SiteTitleQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Layout: React.FC<{
  children: JSX.Element | string | (JSX.Element | string | boolean)[];
}> = props => {
  const { children } = props;
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [showMenu, setShowMenu] = useState(false);
  const Menu = () => (
    <div className="layout-menu-items">
      <h5>MENU</h5>
      <Link to="/projects">
        <h6>Projects</h6>
      </Link>
      <Link to="/">
        <h6>About</h6>
      </Link>
      <h5>LINKS</h5>
      {LinkButtons()}
    </div>
  );

  return (
    <ThemeContext.Provider value={theme}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <div className="layout-main-container">
        {showMenu ? (
          Menu()
        ) : (
          <main>{children}</main>
          // <>
          //   <main>{children}</main>
          //   <footer>
          //     © {new Date().getFullYear()}, Built with &#160;
          //     <a href="https://www.gatsbyjs.org">Gatsby</a>
          //   </footer>
          // </>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
