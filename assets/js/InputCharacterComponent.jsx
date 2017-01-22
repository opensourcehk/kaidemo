import React from 'react';
import TextField from 'material-ui/TextField';
import BaseMUI from './BaseMUI';

const bigfontStyle = {
  fontSize: '48px'
};

const divBigfontStyle = {
  fontSize: '48px',
  border: '1px',
  borderStyle: 'solid'
};

const textAreaStyle = {
  fontFamily: 'freehkfonts',
  fontSize: '24px'
};

const style = {
  container: {
    width: '100%'
  }
}

class InputCharacterComponent extends BaseMUI {

  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: "歡迎試打自由香港楷書\n常見例子：告 房 電 滋 妙",
      inputText : ['歡迎試打自由香港楷書', '常見例子：告 房 電 滋 妙']
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e, newValue) {
    this.setState({
      textFieldValue: newValue,
      inputText: newValue.split('\n')
    });
  }

  render() {
    let numRows = 8;
    return(
      <div style={style.container}>
        <div style={bigfontStyle}>
          自由香港楷書
        </div>
        <TextField
          fullWidth={true}
          multiLine={true}
          floatingLabelText="歡迎試打自由香港楷書"
          rows={numRows}
          textareaStyle={textAreaStyle}
          onChange={this.handleInput}
          defaultValue={this.state.textFieldValue}
        />
        <div style={bigfontStyle}>
          系統預設顯示字體
        </div>
        <div id='chineseTextResult' style={divBigfontStyle}>
            { this.state.inputText
              .map((line, i) => {
                  return <div key={i}>{line}</div>;
              })
            }
        </div>
        <hr />
        <br/>
      </div>
    );
  }
}

export default InputCharacterComponent;
