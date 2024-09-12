import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { LinkButtons } from './commonComponents';
import { ThemeContext } from '../constants';

interface HeaderProps {
  siteTitle: string;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = props => {
  const { siteTitle, showMenu, setShowMenu } = props;
  const theme = useContext(ThemeContext);

  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const MenuButton = () => (
    <IconButton onClick={() => setShowMenu(!showMenu)}>
      {showMenu ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );

  return (
    <header className="header-root">
      <div className="header-div">
        <h5 className="header-content">
          <Link to="/" className="header-text">
            {siteTitle}
          </Link>
          {!mobileView && (
            <div className="header-content-select">
              <Link to="/projects" className="header-text">
                Projects
              </Link>
              <Link to="/" className="header-text">
                <span className="header-text">About</span>
              </Link>
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
