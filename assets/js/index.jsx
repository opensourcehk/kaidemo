import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AwesomeComponent from './AwesomeComponent.jsx';
import AppBarComponent from './AppBarComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <AppBarComponent />
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

injectTapEventPlugin();

render(<App/>, document.getElementById('app'));
