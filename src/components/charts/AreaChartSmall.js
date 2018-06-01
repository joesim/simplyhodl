import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartAxisDefaults
} from "@progress/kendo-react-charts";

const styles = theme => ({
    chart: {
        maxHeight:100
    }
});

class AreaChartSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
      firstSeries: [123, 276, 310, 212, 240, 156, 98],
      secondSeries: [165, 210, 287, 144, 190, 167, 212],
      thirdSeries: [56, 140, 195, 46, 123, 78, 95]
    };
  }
  render() {
    const { classes } = this.props;
    const { categories, firstSeries, secondSeries, thirdSeries } = this.state;

    return (
      <Chart>
        <ChartAxisDefaults visible={false} majorGridLines={false} />
        <ChartSeries>
          <ChartSeriesItem markers={false} color="#e6750ecc" type="area" data={firstSeries} tooltip={true}/>
        </ChartSeries>
      </Chart>
    );
  }
}

AreaChartSmall.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AreaChartSmall);
