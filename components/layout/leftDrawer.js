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
import { useRouter } from "next/router";
import { Container, Grid, Paper } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ left: false });
  const router = useRouter();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const changePage = (text) => {
    const res = navToPage(text);
    router.push(res);
  };

  const fontChangerFunc = (font)=>{
    return <span style={{fontSize:"12px", color:"#707070"}}>{font}</span>
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
<Grid container>
    <Grid item xs={12} sm={12} md={12}>
    <Box
          sx={{
            minHeight: "50px",
            textAlign: "center",
            padding: "7px 0px 0px 15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor:"#334756"
          }}
        >
          <a
            className=""
            href="#"
            style={{
              fontSize: "20px",
              color: "#fff",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            <span
              style={{
                fontSize: "25px",
                color: "#FF4C29",
                borderBottom: "1px solid #f4f4f4",
                borderTop: "1px solid #FF4C29",
              }}
            >
              T
            </span>
            raining
            <span>
              {" "}
              -<sapn style={{ fontSize: "25px", color: "#FF4C29" }}> A</sapn>
              genda
            </span>
          </a>
        </Box>
    </Grid>
</Grid>

      <List>
      <Divider sx={{ color: "#f4f4f4" }} />
        {listItemForSideBar.map((value, index) => (
          <>
            <ListItem button key={index} onClick={() => changePage(value.text)}>
              <ListItemIcon>{value.icon}</ListItemIcon>
              <ListItemText secondary={fontChangerFunc(value.text)} />
            </ListItem>
            <Divider sx={{ color: "#f4f4f4" }} />
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
          sx={{backgroundColor:"rgba(194, 255, 249, 0.3)"}}
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
