import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

const ChildRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" exact={true}  element={<Home />} />
        </Routes>
      </Router>
    </>
  );

}
export default ChildRoutes;