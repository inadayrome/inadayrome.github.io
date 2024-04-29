import React from 'react';
import IconButton from '@mui/material/IconButton';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { LINKEDIN_URL, GITHUB_URL } from '../constants';

export const LinkButtons = () => (
  <div>
    <a href={LINKEDIN_URL}>
      <IconButton title="Connect on LinkedIn" style={{ padding: '5px' }}>
        <LinkedInIcon />
      </IconButton>
    </a>
    <a href={GITHUB_URL}>
      <IconButton title="View Github Repository" style={{ padding: '5px' }}>
        <GitHubIcon />
      </IconButton>
    </a>
  </div>
);
