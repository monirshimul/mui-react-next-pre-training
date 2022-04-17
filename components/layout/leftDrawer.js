import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { listItemForSideBar, navToPage } from "./navListItem";
import { useRouter } from 'next/router'

export default function TemporaryDrawer() {
  
  const [state, setState] = React.useState({ left: false });
  const router = useRouter()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const changePage = (text)=>{

    const res = navToPage(text)
    router.push(res)
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listItemForSideBar.map((value, index) => (
          <>
            <ListItem button key={index} onClick={()=>changePage(value.text)}>
              <ListItemIcon>{value.icon}</ListItemIcon>
              <ListItemText secondary={value.text} />
            </ListItem>
            <Divider sx={{color:"#f9f9f9"}} />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ position: "fixed", top: "20px", left: "-15px" }}>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <FormatAlignLeftIcon sx={{ color: "#064663" }} />{" "}
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
