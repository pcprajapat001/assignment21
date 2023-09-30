import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const UK = () => {
  const [name, setName] = useState("Scotland");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("Scotland")}
          variant="contained"
          fullWidth
        >
          Scotland
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("Wales")}
          variant="contained"
          fullWidth
        >
          Wales
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("England")}
          variant="contained"
          fullWidth
        >
          England
        </Button>
      </Grid>

      <Grid item xs={4}></Grid>

      <Card
        sx={{
          bgcolor: "crimson",
          color: "white",
          margin: 2,
          backgroundImage: `url(${path})`,
          backgroundSize: "cover",
          height: 300,
          width: 500,
        }}
      >
        <CardContent>
          <h1 style={{ color: "brown" }}>{name} </h1>
        </CardContent>
      </Card>
    </Grid>
  );
};
