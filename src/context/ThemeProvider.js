import React from 'react';
import {ThemeProvider as ThemeStyledComponentProvider} from 'styled-components';

import light from '../styles/themes/light';

const ThemeProvider = props => {
  return (
    <ThemeStyledComponentProvider theme={light}>
      {props.children}
    </ThemeStyledComponentProvider>
  );
};

export default ThemeProvider;
