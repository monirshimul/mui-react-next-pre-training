import React from "react";
import { Grid, Box, Divider } from "@mui/material";
const grid = ({customStyle}) => {
    const {MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour} = customStyle;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
        <Divider />
        <Grid container spacing={2} px={5} my={5}>
          <Grid item xs={6} md={8}>
            <MyPaperFour>xs=6 md=8</MyPaperFour>
          </Grid>
          <Grid item xs={6} md={4}>
            <MyPaperTwo>xs=6 md=4</MyPaperTwo>
          </Grid>
          <Grid item xs={6} md={4}>
            <MyPaperOne>xs=6 md=4</MyPaperOne>
          </Grid>
          <Grid item xs={6} md={8}>
            <MyPaperThree>xs=6 md=8</MyPaperThree>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default grid;
