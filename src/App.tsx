import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const Intro = React.lazy(() => import("./components/Loader/Intro"));
import "./App.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<Intro />}>
        <Routes>
          <Route path="*" element={<Intro />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
