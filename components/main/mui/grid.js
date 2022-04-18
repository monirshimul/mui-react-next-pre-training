import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import RecipeReviewCard from "./card";
const grid = ({ customStyle }) => {
  const { MyCardOne, MyCardTwo, MyCardThree, MyCardFour } = customStyle;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} px={5} my={5}>
          <Grid item md={8} sm={10} xs={12}>
            <MyCardOne
              sx={{
                padding: "20px",
              }}
            >
              <Grid container spacing={1} justifyContent="center">
                <Grid item md={6} sm={10} xs={12}>
                  <RecipeReviewCard
                    newImage={"/one.jpg"}
                    text={"A"}
                    color={"#FF7878"}
                  />
                </Grid>
                <Grid item md={6} sm={10} xs={12}>
                  <RecipeReviewCard
                    newImage={"/two.jpg"}
                    text={"B"}
                    color={"#406343"}
                  />
                </Grid>
              </Grid>
            </MyCardOne>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <MyCardTwo
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <RecipeReviewCard
                newImage={"/three.jpg"}
                text={"C"}
                color={"#63B4B8"}
              />
            </MyCardTwo>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <MyCardThree
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <RecipeReviewCard
                newImage={"/four.jpg"}
                text={"D"}
                color={"#316B83"}
              />
            </MyCardThree>
          </Grid>
          <Grid item md={8} sm={10} xs={12}>
            <MyCardFour
              sx={{
                padding: "20px",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={10} md={6}>
                  <RecipeReviewCard
                    newImage={"/five.jpg"}
                    text={"E"}
                    color={"#150050"}
                  />
                </Grid>
                <Grid item xs={12} sm={10} md={6}>
                  <RecipeReviewCard
                    newImage={"/six.jpg"}
                    text={"F"}
                    color={"#A45D5D"}
                  />
                </Grid>
              </Grid>
            </MyCardFour>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default grid;
