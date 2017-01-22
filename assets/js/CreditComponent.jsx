import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import BaseMUI from './BaseMUI';
import RaisedButton from 'material-ui/RaisedButton';


const anchorStyle = {
    fontSize: '24px',
    color: '#337ab7',
    texDecoration: 'none',
    backgroundColor: 'transparent'
};

const chTextStyle = {
    fontFamily: 'freehkfonts',
    fontSize: '24px'
};

const enTextStyle = {
    fontSize: '24px'
};

const firstColumnWidth  = {
  width: '16.67%'
}

class CreditComponent extends BaseMUI {

  constructor(props) {
    super(props);
  }

  render() {

    let chSourceCodeTextStyle = {
        fontFamily: 'freehkfonts',
        fontSize: '24px',
        color: '#ffffff',
        marginRight: '10pt',
    };

    let enSourceCodeTextStyle = {
        fontSize: '24px',
        color: '#ffffff',
        marginRight: '10pt',
    };

    return (
      <div>
        <div>
            <span style={chTextStyle}>鳴謝</span>
            <span style={enTextStyle}>Credit:</span>
        </div>
        <div>
            <span style={chTextStyle}>字型團隊：</span>
            <RaisedButton label='自由香港字型'
               labelStyle={chTextStyle} primary={true}
              href="https://freehkfonts.opensource.hk"  target='_blank' />
        </div>
        <div>
            <span style={chTextStyle}>雲端寄存：</span>
            <RaisedButton label='UDomain Web Hosting'
              labelStyle={enTextStyle} primary={true}
              href="https://www.udomain.hk/" target='_blank' />
        </div>
        <div>
            <span style={chTextStyle}>技術支援：</span>
            <RaisedButton label='Open Source Hong Kong'
              labelStyle={enTextStyle} primary={true}
              href='https://opensource.hk' target='_blank'  />
        </div>
        <div>
          <span style={chTextStyle}>原始碼：</span>
            <RaisedButton label='本網站原始碼 Source Code'
                labelStyle={chTextStyle} primary={true}
                href='https://github.com/opensourcehk/kaidemo'
                children={<div>
                            <span style={chSourceCodeTextStyle}>本網站原始碼</span>
                            <span style={enSourceCodeTextStyle}>Source Code</span>
                          </div>
                          }
                target='_blank' />
            <span style={enTextStyle}>(License: General Public License 3.0)</span>
        </div>
      </div>
    );
  }

  /*render() {
    return (
        <div>
          <div>
              <span style={chTextStyle}>鳴謝</span>
              <span style={enTextStyle}>Credit:</span>
          </div>
          <div>
              <span style={chTextStyle}>字型團隊：</span>
              <span><a href="https://freehkfonts.opensource.hk" style={anchorStyle}>
                <span style={chTextStyle}>自由香港字型</span></a>
              </span>
          </div>
          <div>
            <span style={chTextStyle}>雲端寄存：</span>
            <span>
              <a href="https://www.udomain.hk/" style={anchorStyle}>
                <span style={enTextStyle}>UDomain Web Hosting</span>
              </a>
            </span>
          </div>
          <div>
            <span style={chTextStyle}>技術支援：</span>
            <span>
              <a href="https://opensource.hk" style={anchorStyle}>
                <span style={enTextStyle}>Open Source Hong Kong</span>
              </a>
            </span>
          </div>
          <div>
            <span style={chTextStyle}>原始碼：</span>
            <span>
              <a href="https://github.com/opensourcehk/kaidemo" style={anchorStyle}>
                <span style={chTextStyle}>本網站原始碼</span> Source Code
              </a>
              <span style={enTextStyle}>(License: General Public License 3.0)</span>
            </span>
          </div>
        </div>
    );
  }*/
}

export default CreditComponent;
