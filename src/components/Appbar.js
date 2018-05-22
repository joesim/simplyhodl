import { AppBar, IconButton, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import React from "react";

class Appbar extends React.Component {
    
    constructor(props) {
		super(props);
	}

	render() {
		return (
            <AppBar position="static">
                <Grid container alignItems="center" direction="row" justify="space-between">
                <Grid item>
                <IconButton >
                        <MenuIcon />
                    </IconButton>
                    </Grid>
                    <Grid item>
                    <Typography variant="title" color="inherit">
                        Title
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Button color="inherit">Login</Button>
                    </Grid>
                </Grid>
            </AppBar>
		);
	}
}

export default Appbar;
