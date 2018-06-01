import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import BuildIcon from "@material-ui/icons/Build";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import DescriptionIcon from "@material-ui/icons/Description";
import RemoveIcon from "@material-ui/icons/Remove";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  iconsSelection: {
    color: "#e6750e"
  }
});

class NestedList extends React.Component {
  state = {
    openScreening: false,
    openDetection: false,
    openEquipment: false,
    openReports: false
  };

  handleClickScreening = () => {
    this.setState({ openScreening: !this.state.openScreening });
  };

  handleClickDetection = () => {
    this.setState({ openDetection: !this.state.openDetection });
  };

  handleClickEquipment = () => {
    this.setState({ openEquipment: !this.state.openEquipment });
  };

  handleClickReports = () => {
    this.setState({ openReports: !this.state.openReports });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Dashboard</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className={classes.iconsSelection} />
            </ListItemIcon>
            <ListItemText inset primary="Overview" />
          </ListItem>
          <ListItem button onClick={this.handleClickScreening}>
            <ListItemIcon>
              <DesktopWindowsIcon className={classes.iconsSelection} />
            </ListItemIcon>
            <ListItemText inset primary="Screening" />
            {this.state.openScreening ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openScreening} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText inset primary="Recheck" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Remote screening" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Scnr. Performance" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClickDetection}>
            <ListItemIcon>
              <LocationSearchingIcon className={classes.iconsSelection} />
            </ListItemIcon>
            <ListItemText inset primary="Detection" />
            {this.state.openDetection ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openDetection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClickEquipment}>
            <ListItemIcon>
              <BuildIcon className={classes.iconsSelection} />
            </ListItemIcon>
            <ListItemText inset primary="Equipment" />
            {this.state.openEquipment ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openEquipment} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClickReports}>
            <ListItemIcon>
              <DescriptionIcon className={classes.iconsSelection} />
            </ListItemIcon>
            <ListItemText inset primary="Reports" />
            {this.state.openReports ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openReports} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
