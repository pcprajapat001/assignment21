import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <NavItem path="/" label="India" />
          </Grid>
          <Grid item xs={2}>
            <NavItem path="/uk" label="UK" />
          </Grid>
          <Grid item xs={2}>
            <NavItem path="/us" label="US" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
