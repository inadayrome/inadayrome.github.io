import { Link } from 'gatsby';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { GITHUB_URL } from '../constants';

interface HeaderProps {
  siteTitle: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '1.45rem',
    },
    headerDiv: {
      margin: '0 auto',
      maxWidth: '960px',
      padding: '1.45rem 1.0875rem',
      borderBottom: '1px solid #eee',
      display: 'grid',
      justifyContent: 'space-between',
      gridTemplateColumns: 'auto auto',
    },
    homePageLink: {
      color: '#777',
      textDecoration: 'none',
      fontWeight: 'initial',
    },
  })
);

const Header: React.FC<HeaderProps> = props => {
  const { siteTitle } = props;
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.headerDiv}>
        <h5 style={{ margin: 0, alignSelf: 'center' }}>
          <Link to="/" className={classes.homePageLink}>
            {siteTitle}
          </Link>
        </h5>
        <a href={GITHUB_URL}>
          <IconButton title="View Github Repository" color="primary">
            <GitHubIcon />
          </IconButton>
        </a>
      </div>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
