import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import CoronaD3, { CoronaD3Image } from './projects/corona-d3';

export const GITHUB_URL = 'https://github.com/inadayrome/inadayrome.github.io';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/wenjunlee1994';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const ThemeContext = React.createContext(theme);

export const lightTheme = {
  mainText: '#000',
  headerText: '#777',
  secondaryText: '#3a3a3a',
  mainBackground: '#fff',
  secondaryBackground: '#e6e6e6',
  tertiaryBackground: '#dcdcdc',
};

export const ProjectList = [{ image: CoronaD3Image, project: CoronaD3 }];
