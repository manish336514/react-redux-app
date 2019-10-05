import React, { Component } from "react";

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";

export default class componentName extends Component {
  handleclick = (text, index) => {
    console.log("clicked side nav", text, index);
  };
  render() {
    return (
      <div>
        {[
          "Places To Visit",
          "History",
          "Modern era",
          "Aiport",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts"
        ].map((text, index) => (
          <div
            className="sidenav-items"
            onClick={() => this.handleclick(text, index)}
          >
            {text}
          </div>
        ))}
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
