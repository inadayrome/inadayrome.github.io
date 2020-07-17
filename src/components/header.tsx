import { Link } from 'gatsby';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface HeaderProps {
  siteTitle: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '1.45rem',
    },
    headerDiv: {
      margin: '0 auto',
      maxWidth: '960px',
      padding: '1.45rem 1.0875rem',
      borderBottom: '1px solid #eee',
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
    <header style={{ marginBottom: '1.45rem' }}>
      <div className={classes.headerDiv}>
        <h5 style={{ margin: 0 }}>
          <Link to="/" className={classes.homePageLink}>
            {siteTitle}
          </Link>
        </h5>
      </div>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
