import React from 'react';
import BaseMUI from './BaseMUI';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class AwesomeComponent extends BaseMUI {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
       <div style={styles.container}>
        Likes W3C : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
      </MuiThemeProvider>
    );
  }

}

export default AwesomeComponent;
