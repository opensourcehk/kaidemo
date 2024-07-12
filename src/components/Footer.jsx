import { Grid } from '@material-ui/core';

function Footer(){
    return (
        <Grid container id="footer">
          <Grid item xs={12}>
            <a href="https://opensource.hk" target="_blank">開源香港</a>的kaidemo示範<a href="https://freehkfonts.opensource.hk" target="_blank">自由香港字型計劃</a>的自由香港楷書字型，kaidemo和字型都以開放源碼授權免費發放。感謝<a href="https://www.udomain.hk" target="_blank">UDomain</a>贊助雲端服務。
          </Grid>
        </Grid>
    );
}

export default Footer;
