import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiOrangeTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

/**
 * Basic theme bookkeeping for Material UI
 */
class BaseMUI extends React.Component {
  getChildContext() {
      return {
        muiTheme: getMuiTheme(muiOrangeTheme)
      };
  }
}

BaseMUI.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default BaseMUI;
