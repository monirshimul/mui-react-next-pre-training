import { Container, Paper } from "@mui/material";
import React from "react";

const container = () => {
  return (
    <div>
      <Container maxWidth="xs" sx={{ marginTop: "20px" }}>
        <Paper>
          <h5>Hello</h5>
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Paper>
          <h5>Hello</h5>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <Paper>
          <h5>Hello</h5>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper>
          <h5>Hello</h5>
        </Paper>
      </Container>
      <Container maxWidth="xl">
        <Paper>
          <h5>Hello</h5>
        </Paper>
      </Container>
    </div>
  );
};

export default container;
