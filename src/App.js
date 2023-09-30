import React, { useState } from "react";

import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { US } from "./components/US";
import { UK } from "./components/UK";
import { India } from "./components/India";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Card>
      <CardContent>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<India />} />
            <Route path="/uk" element={<UK />} />
            <Route path="/us" element={<US />} />
          </Routes>
        </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;
