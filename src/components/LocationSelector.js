import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  selector: {
    border: "1px solid #e6750e",
    color: "#808080",
    borderRadius: 3,
    height: 30,
    padding: 3,
    cursor: "pointer"
  },
  locationArea: {
    marginLeft: "10px"
  }
});

class LocationSelector extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="flex-start"
          className={classes.selector}
        >
          <LocationOnIcon />
          <div className={classes.locationArea}>Airport</div>
          <KeyboardArrowDownIcon />
        </Grid>
      </div>
    );
  }
}

LocationSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationSelector);
