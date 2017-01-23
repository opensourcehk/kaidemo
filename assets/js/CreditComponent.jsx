import React from 'react';
import BaseMUI from './BaseMUI';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  chTextStyle : {
      fontFamily: 'freehkfonts',
      fontSize: '24px'
  },
  enTextStyle : {
      fontSize: '24px'
  },
  raisedButtonMarginStyle : {
      marginLeft: '10px'
  },
  divStyle : {
    marginBottom: '10px'
  },
  licenseStyle: {
      fontSize: '24px',
      marginLeft: '10px'
  }
};

class CreditComponent extends BaseMUI {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div style={styles.divStyle}>
            <span style={styles.chTextStyle}>鳴謝</span>
            <span style={styles.enTextStyle}>Credit:</span>
        </div>
        <div style={styles.divStyle}>
            <span style={styles.chTextStyle}>字型團隊：</span>
            <RaisedButton label='自由香港字型'
               labelStyle={styles.chTextStyle} primary={true}
              href="https://freehkfonts.opensource.hk"  target='_blank'
              style={styles.raisedButtonMarginStyle}
            />
        </div>
        <div style={styles.divStyle}>
            <span style={styles.chTextStyle}>雲端寄存：</span>
            <RaisedButton label='UDomain Web Hosting'
              labelStyle={styles.enTextStyle} primary={true}
              href="https://www.udomain.hk/" target='_blank'
              style={styles.raisedButtonMarginStyle}
             />
        </div>
        <div style={styles.divStyle}>
            <span style={styles.chTextStyle}>技術支援：</span>
            <RaisedButton label='Open Source Hong Kong'
              labelStyle={styles.enTextStyle} primary={true}
              href='https://opensource.hk' target='_blank'
              style={styles.raisedButtonMarginStyle}
             />
        </div>
        <div style={styles.divStyle}>
          <span style={styles.chTextStyle}>原始碼：</span>
            <RaisedButton label='本網站原始碼'
                labelStyle={styles.chTextStyle} primary={true}
                href='https://github.com/opensourcehk/kaidemo'
                target='_blank' style={styles.raisedButtonMarginStyle} />
            <RaisedButton label='Source Code'
                    labelStyle={styles.enTextStyle} primary={true}
                    href='https://github.com/opensourcehk/kaidemo'
                    target='_blank' style={styles.raisedButtonMarginStyle} />
            <span style={styles.licenseStyle}>(License: General Public License 3.0)</span>
        </div>
      </div>
    );
  }  
}

export default CreditComponent;
