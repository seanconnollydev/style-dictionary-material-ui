import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import muiTheme from '@goldenshun/material-ui-theme';
console.log('muiTheme', muiTheme);

storiesOf('Button', module)
  .add('primary', () => {
    const theme = createMuiTheme(muiTheme);
    return (
      <ThemeProvider theme={theme}>
        <Button color="primary">Primary</Button>
      </ThemeProvider>
    );
  });
