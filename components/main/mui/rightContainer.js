import React from 'react'
import { Grid, Box, Divider } from "@mui/material";
const RightContainer = ({customStyle}) => {
    const {MyPaperOne, MyPaperTwo,MyPaperThree, MyPaperFour} = customStyle;
  return (
    <Grid container spacing={2} px={5} my={5}>
    <Grid item xs={6} md={8}>
      <MyPaperOne>xs=6 md=8</MyPaperOne>
    </Grid>
    <Grid item xs={6} md={4}>
      <MyPaperTwo>xs=6 md=4</MyPaperTwo>
    </Grid>
    <Grid item xs={6} md={4}>
      <MyPaperThree>xs=6 md=4</MyPaperThree>
    </Grid>
    <Grid item xs={6} md={8}>
      <MyPaperFour>xs=6 md=8</MyPaperFour>
    </Grid>
  </Grid>

  )
}

export default RightContainer