import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarComponent from './AppBarComponent.jsx';
import CreditComponent from './CreditComponent.jsx';
import InputCharacterComponent from './InputCharacterComponent.jsx';
import BaseMUI from './BaseMUI.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends BaseMUI {
  render () {
    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
         <div>
          <AppBarComponent />
          <InputCharacterComponent />
          <CreditComponent />
        </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

render(<App/>, document.getElementById('app'));
