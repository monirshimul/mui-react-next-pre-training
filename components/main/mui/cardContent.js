import { Grid, Paper } from "@mui/material";
import React from "react";
import { cardContentData } from "./utils/cardContentData";
const CardContent = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          
          backgroundColor:"#f0faf9",
          padding: { md: "50px", sm: "10px", xs: "5px" },
        }}
      >
        {cardContentData.map((v, i) => (
          <Grid item xs={10} sm={4} md={2.2}>
            <Paper
              sx={{
                padding: "50px",
                borderRadius: "15px",
                textAlign:"center",
                cursor:"pointer",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                 
              }}
            >
              {v.icon}
              <br />
              <span style={{ color: "#475569", fontSize: "18px", fontWeight:"bold" }}>
                {v.text}
              </span>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardContent;
