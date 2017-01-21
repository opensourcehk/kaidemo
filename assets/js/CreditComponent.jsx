import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import BaseMUI from './BaseMUI';

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
    return (
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn style={firstColumnWidth}>
                <span style={chTextStyle}>鳴謝</span>
                <span style={enTextStyle}>Credit:</span>
            </TableRowColumn>
            <TableRowColumn>&nbsp;</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={firstColumnWidth}>
                <span style={chTextStyle}>字型團隊：</span>
            </TableRowColumn>
            <TableRowColumn>
                <span><a href="https://freehkfonts.opensource.hk" style={anchorStyle} target='_blank'>
                  <span style={chTextStyle}>自由香港字型</span></a>
                </span>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={firstColumnWidth}>
              <span style={chTextStyle}>雲端寄存：</span>
            </TableRowColumn>
            <TableRowColumn>
              <span>
                <a href="https://www.udomain.hk/" style={anchorStyle} target='_blank'>
                  <span style={enTextStyle}>UDomain Web Hosting</span>
                </a>
              </span>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={firstColumnWidth}>
              <span style={chTextStyle}>技術支援：</span>
            </TableRowColumn>
            <TableRowColumn>
              <span>
                <a href="https://opensource.hk" style={anchorStyle} target='_blank'>
                  <span style={enTextStyle}>Open Source Hong Kong</span>
                </a>
              </span>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <span style={chTextStyle}>原始碼：</span>
            </TableRowColumn>
            <TableRowColumn>
                <span>
                  <a href="https://github.com/opensourcehk/kaidemo" style={anchorStyle}
                    target='_blank'>
                    <span style={chTextStyle}>本網站原始碼</span> Source Code
                  </a>
                  <span style={enTextStyle}>(License: General Public License 3.0)</span>
              </span>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
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
