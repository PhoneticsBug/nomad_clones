// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CleanUp from "./learning/cleanup.js"
import LearnUseState from "./learning/usestate.js"

const App = () => {

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/cleanup" element={<CleanUp />} />
        <Route path="/usestate" element={<LearnUseState />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;