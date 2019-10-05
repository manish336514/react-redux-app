import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentSideNav } from "../../redux/actions/index";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleclick = (text, index) => {
    console.log("clicked side nav", text, index);
    this.props.setCurrentSideNav(text);
  };
  render() {
    return (
      <div>
        {[
          "Places To Visit",
          "Railswaystation",
          "Busstation",
          "History",
          "Modern era",
          "Aiport"
        ].map((text, index) => (
          <div
            className="sidenav-items"
            onClick={() => this.handleclick(text, index)}
          >
            {text}
          </div>
        ))}
        {this.props.currenttab}
      </div>
    );
  }
}

// <List>
// {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//   <ListItem button key={text}>
//     <ListItemIcon>
//       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//     </ListItemIcon>
//     <ListItemText primary={text} />
//   </ListItem>
// ))}
// </List>

// const mapDispatchToProps = dispatch => ({
//   setCurrentSideNav: () => dispatch(setCurrentSideNav)
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(SideNavBar);
const mapStateToProps = state => {
  console.log("state", state);
  return {
    currenttab: state.getNavReducer.currenttab
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentSideNav: text => dispatch(setCurrentSideNav(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavBar);
