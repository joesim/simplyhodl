import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import OverviewChart from "./charts/OverviewChart.js";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AreaChartSmall from "./charts/AreaChartSmall";

const styles = theme => ({
  root: {
    marginTop: 20
  },
  card: {
    width: "100%"
  },
  chartOverview: {
    padding: 15
  },
  number: {
    padding: "10px 0px 10px 20px"
  },
  title: {
    padding: "10px 0px 10px 20px",
    marginTop: -20,
    marginLeft: 2
  },
  chartAreaSmall: {
    maxHeight: 200,
    maxWidth:600
  }
});

class OverviewPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item className={classes.card}>
          <Card>
            <Typography className={classes.number} variant="display1">
              10,525
            </Typography>
            <Typography className={classes.title} variant="subheading">
              Luggage over time
            </Typography>
            <Divider />
            <OverviewChart className={classes.chartOverview} />
          </Card>
        </Grid>
        <Grid item>
          <Grid container spacing={16}>
            <Grid item>
              <Card>
                <Typography className={classes.number} variant="display1">
                  2,345/h
                </Typography>
                <Typography className={classes.title} variant="subheading">
                  Luggage throughput
                </Typography>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <Typography className={classes.number} variant="display1">
                  1,436
                </Typography>
                <Typography className={classes.title} variant="subheading">
                  Luggage over time
                </Typography>
              </Card>
            </Grid>
            <Grid item className={classes.chartAreaSmall}>
              <Card className={classes.chartAreaSmall}>
                <Grid
                  container
                  directiom="row"
                  justify="flex-start"
                  alignItems="center" className={classes.chartAreaSmall}
                >
                  <Grid item>
                    <Typography className={classes.number} variant="display1">
                      345
                    </Typography>
                    <Typography className={classes.title} variant="subheading">
                      Luggage over time
                    </Typography>
                  </Grid>
                  <Grid item>
                    <div>
                    <AreaChartSmall />
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

OverviewPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OverviewPage);
