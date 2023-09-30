import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent } from "@mui/material";

export const NavItem = ({ path, label }) => {
  return (
    <Link to={path}>
      <Button variant="contained" fullWidth color="primary">
        {label}
      </Button>
    </Link>
  );
};
