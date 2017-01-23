import React from 'react';
import BaseMUI from './BaseMUI';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const fontFamilyStyle = {
    fontFamily: 'freehkfonts'
};

class AppBarComponent extends BaseMUI {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
          showMenuIconButton={false}
          title={<span style={fontFamilyStyle}>自由香港楷書示範</span>}
          iconElementRight={<FlatButton label="有關自由香港字型" labelStyle={fontFamilyStyle}
              href="https://freehkfonts.opensource.hk" />}
        />
    );
  }
}

export default AppBarComponent;
