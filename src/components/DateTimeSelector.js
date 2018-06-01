import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DateRangeIcon from "@material-ui/icons/DateRange";
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
  dateArea: {
    marginLeft: "10px"
  }
});

class DateTimeSelector extends React.Component {
  render() {
    const { classes } = this.props;
    //2018-05-05 at 00:00 to 2018-06-06 at 23:59

    return (
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="flex-start"
        className={classes.selector}
      >
        <DateRangeIcon />
        <div className={classes.dateArea}>
        Current
        </div>
        <KeyboardArrowDownIcon />
      </Grid>
    );
  }
}

DateTimeSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateTimeSelector);
