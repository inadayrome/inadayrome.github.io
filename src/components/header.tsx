import { Link } from 'gatsby';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useMediaQuery, Theme, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { LinkButtons } from './commonComponents';

interface HeaderProps {
  siteTitle: string;
  theme: Theme;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      background: 'white',
      top: 0,
      marginBottom: '1.45rem',
    },
    headerDiv: {
      margin: '0 auto',
      maxWidth: '960px',
      padding: '1.45rem 1.0875rem',
      [theme.breakpoints.up('md')]: {
        borderBottom: '1px solid #eee',
      },
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '1rem',
    },
    headerContent: {
      margin: 0,
      alignSelf: 'center',
      justifyContent: 'space-between',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },
    headerText: {
      color: '#777',
      textDecoration: 'none',
      fontWeight: 'initial',
    },
    contentSelect: {
      '& :not(:first-child)': {
        marginLeft: '1rem',
      },
    },
  })
);

const Header: React.FC<HeaderProps> = props => {
  const { siteTitle, theme, showMenu, setShowMenu } = props;
  const classes = useStyles();

  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const MenuButton = () => (
    <IconButton onClick={() => setShowMenu(!showMenu)}>
      {showMenu ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );

  return (
    <header className={classes.root}>
      <div className={classes.headerDiv}>
        <h5 className={classes.headerContent}>
          <Link to="/" className={classes.headerText}>
            {siteTitle}
          </Link>
          {!mobileView && (
            <div className={classes.contentSelect}>
              <span className={classes.headerText}>Ideas</span>
              <span className={classes.headerText}>About</span>
            </div>
          )}
        </h5>
        {mobileView ? MenuButton() : LinkButtons()}
      </div>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
