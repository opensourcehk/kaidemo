import { Grid } from '@material-ui/core';

function Footer(){
    return (
        <Grid container id="footer">
          <Grid item xs={12}>
            由<a href="https://freehkfonts.opensource.hk">自由香港字型計劃</a>提供開放源碼字型，及<a href="https://opensource.hk">開源香港</a>開發<a href="https://github.com/opensourcehk/kaidemo">示範程式</a>。
          </Grid>
        </Grid>
    );
}

export default Footer;