import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default class TabRightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {this.props.placedataRight.map(pdr => {
              return <Tab label={pdr} />;
            })}
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={this.state.value}>
          {this.props.placedataRight[this.state.value]}{" "}
        </TabPanel>
      </div>
    );
  }
}

// <Tab label="Item One" />
// <Tab label="Item Two" />
// <Tab label="Item Three" />
// <Tab label="Item Four" />
// <Tab label="Item Five" />
// <Tab label="Item Six" />
// <Tab label="Item Seven" />
