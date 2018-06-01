import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "./Breadcrumbs.js";
import { Grid } from "@material-ui/core";
import DateTimeSelector from "./DateTimeSelector";
import LocationSelector from "./LocationSelector";

const styles = theme => ({});

class SecondTopBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Breadcrumbs />
          <Grid item>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between"
              spacing={8}
            >
              <Grid item>
                <DateTimeSelector />
              </Grid>
              <Grid item>
                <LocationSelector />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SecondTopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SecondTopBar);
