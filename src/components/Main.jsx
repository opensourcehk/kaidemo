import React from 'react';
import { Grid, TextField } from '@material-ui/core';

function Main(){
    const numRows = 8;
    const defaultMessage = "常見例子：告房電滋妙";
    const [sysFontMessage, setSysFontMessage] = React.useState(defaultMessage);
    const updateSysFontArea = (props) => {
      setSysFontMessage(props.target.value);
    }
    return (
      <Grid container>
        <Grid item xs={6}>
          <TextField 
            label="自由香港楷書"
            defaultValue={ sysFontMessage }
            fullWidth={true}
            multiline
            rows={numRows}
            onChange={updateSysFontArea}
            InputProps={{style: {fontFamily: "freehkfonts", fontSize: 36}}}
            InputLabelProps={{style: {fontFamily: "freehkfonts", fontSize: 24}}}
          />
        </Grid>
        <Grid item xs={6}>
          <div>系統預設字型</div>
          <div id="SysFontArea">    
          { sysFontMessage }        
          </div>
        </Grid>
      </Grid>
    );
}

export default Main;