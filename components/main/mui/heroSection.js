import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Paper, Box, Divider } from "@mui/material";

const HeroSection = ({ bg, content, heading, image }) => {
  console.log("hero data", bg, content, heading);

  return (
    <Fragment>
      <Grid
        container
        spacing={1.5}
        justifyContent="space-around"
        sx={{
          backgroundColor: bg,
          marginTop: "5px",
          padding: { md: "100px", sm: "50px", xs: "5px" },
        }}
      >
        <Grid item xs={12} sm={12} md={5}>
          <h1>{heading}</h1>
          <small>{content}</small>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              borderRadius: "50%",
              width: "350px",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            }}
          >
            {image}
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HeroSection;
