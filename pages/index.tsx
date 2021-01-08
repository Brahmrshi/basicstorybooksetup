import { Button } from "components/Button";
import Grid from "components/Grid";
import Box from "components/Box/Box";
import React from "react";
export default function index() {
  return (
    <div>
      <div className="mb-3">
        <Button label="Button"> </Button>
      </div>
      <div className="mb-3">
        <Button label="Button" primary={true}></Button>
      </div>
      <div className="mb-3">
        <Button label="Button" primary={true} size="large"></Button>
      </div>
      <div className="mb-3">
        <Button label="Button" primary={true} size="medium"></Button>
      </div>
      <div className="mb-3">
        <Button label="Button" primary={true} size="small"></Button>
      </div>
      <div style={{ position: "relative" }}>
        <Grid
          container
          spacing="sm"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>Box 1</Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>Box 2</Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>Box 3</Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>Box 4</Box>
          </Grid>
        </Grid>
      </div>
      <div style={{ position: "relative", height: "100vh" }}>
        <Grid
          container
          spacing="sm"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={1}>
            <Box>Box 1</Box>
          </Grid>

          <Grid item xs={1}>
            <Box>Box 2</Box>
          </Grid>

          <Grid item xs={1}>
            <Box>Box 3</Box>
          </Grid>

          <Grid item xs={1}>
            <Box>Box 4</Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
