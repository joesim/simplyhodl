import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  nameStyle: {
    textDecoration: "none",
    color: "rgba(230, 117, 14, 0.8)"
  },
  arrowStyle: {
    color: "#808080b5"
  }
});

class Breadcrumbs extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="flex-start"
        >
          <Link to="about" className={classes.nameStyle}>
            Screening
          </Link>
          <KeyboardArrowRightIcon className={classes.arrowStyle} />
          <Link to="about" className={classes.nameStyle}>
            Recheck
          </Link>
        </Grid>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Breadcrumbs);
