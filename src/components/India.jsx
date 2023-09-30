import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const India = () => {
  const [name, setName] = useState("Agra");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={2.4}>
        <Button
          color="error"
          onClick={() => setName("Agra")}
          variant="contained"
          fullWidth
        >
          Agra
        </Button>
      </Grid>
      <Grid item xs={2.4}>
        <Button
          color="error"
          onClick={() => setName("Delhi")}
          variant="contained"
          fullWidth
        >
          Delhi
        </Button>
      </Grid>
      <Grid item xs={2.4}>
        <Button
          color="error"
          onClick={() => setName("Goa")}
          variant="contained"
          fullWidth
        >
          Goa
        </Button>
      </Grid>
      <Grid item xs={2.4}>
        <Button
          color="error"
          onClick={() => setName("Mumbai")}
          variant="contained"
          fullWidth
        >
          Mumbai
        </Button>
      </Grid>
      <Grid item xs={2.4}>
        <Button
          color="error"
          onClick={() => setName("Rajasthan")}
          variant="contained"
          fullWidth
        >
          Rajasthan
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
          <h1 style={{ color: "brown" }}>{name}</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};
