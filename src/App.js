import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
