import React from "react";
import { Grid, Box, Divider } from "@mui/material";
const LeftContainer = ({customStyle}) => {
    const {MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour} = customStyle;
  return (
    <Grid container spacing={2} px={5} my={5}>
      <Grid item xs={8}>
        <MyPaperOne>xs=8</MyPaperOne>
      </Grid>
      <Grid item xs={4}>
        <MyPaperTwo>xs=4</MyPaperTwo>
      </Grid>
      <Grid item xs={4}>
        <MyPaperThree>xs=4</MyPaperThree>
      </Grid>
      <Grid item xs={8}>
        <MyPaperFour>xs=8</MyPaperFour>
      </Grid>
    </Grid>
  );
};

export default LeftContainer;
