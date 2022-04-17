import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import RecipeReviewCard from './card';
const grid = ({customStyle}) => {
    const {MyCardOne, MyCardTwo, MyCardThree, MyCardFour} = customStyle;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} px={5} my={5}>
          <Grid item md={8} sm={10} xs={12}>
            <MyCardOne sx={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
              <RecipeReviewCard newImage={"/one.jpg"} text={"A"} color={"#FF7878"}/>
              <RecipeReviewCard newImage={"/two.jpg"} text={"B"} color={"#406343"}/>
              
            </MyCardOne>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <MyCardTwo sx={{display:"flex", justifyContent:"center", padding:"20px"}}>
            <RecipeReviewCard newImage={"/three.jpg"} text={"C"} color={"#63B4B8"}/>
            </MyCardTwo>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <MyCardThree
            sx={{display:"flex", justifyContent:"center", padding:"20px"}}
            >
              <RecipeReviewCard newImage={"/four.jpg"} text={"D"} color={"#316B83"}/>
              
            </MyCardThree>
          </Grid>
          <Grid item md={8} sm={10} xs={12}>
            <MyCardFour
            sx={{display:"flex", justifyContent:"space-around", padding:"20px"}}
            >
              <RecipeReviewCard newImage={"/five.jpg"} text={"E"} color={"#150050"}/>
              <RecipeReviewCard newImage={"/six.jpg"} text={"F"} color={"#A45D5D"}/>
            </MyCardFour>
          </Grid>
        </Grid>      
      </Box>
    </div>
  );
};

export default grid;
