/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.scss';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { LinkButtons } from './commonComponents';
import { ThemeContext, theme } from '../constants';

interface SiteTitleQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const useStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      margin: '0 auto',
      maxWidth: 960,
      padding: '0 1.0875rem 1.45rem',
    },
    menuItems: {
      '& > h6, h5': {
        color: '#777',
        textDecoration: 'none',
        fontWeight: 'normal',
      },
    },
  })
);

const Layout: React.FC<{
  children: JSX.Element | string | (JSX.Element | string | boolean)[];
}> = props => {
  const { children } = props;
  const classes = useStyles();
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
    <div className={classes.menuItems}>
      <h5>MENU</h5>
      <h6>Ideas</h6>
      <h6>About</h6>
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
      <div className={classes.mainContainer}>
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
