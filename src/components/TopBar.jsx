import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function TopBar(){
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" style={{fontFamily: "freehkfonts",}}>
            自由香港楷書對比
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;

