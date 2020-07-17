/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.scss';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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
  })
);

const Layout: React.FC<{
  children: JSX.Element | string | (JSX.Element | string)[];
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.mainContainer}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with &#160;
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
