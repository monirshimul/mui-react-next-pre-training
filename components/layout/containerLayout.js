import React from 'react'
import { Grid, Box, Divider } from "@mui/material";
const ContainerLayout = ({first, second}) => {
    const changeDesign = (bg)=>{
        return (
            {
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                backgroundColor: bg,
                borderRadius:"5px"
            }
        )
    }
  return (
    <Grid container spacing={2} px={5} my={5}>
        <Grid sx={changeDesign("#383838")} item xs={12} sm={10} md={6}>
            {first}
        </Grid>
        <Grid sx={changeDesign("#066163")} item xs={12} sm={10} md={6}>
            {second}
        </Grid>
    </Grid>
  )
}

export default ContainerLayout