import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './Components/Home/Homepage';
import Menu from './Components/Menu/Menu';
import Error from './Pages/Error/Error';
import Projects from './Pages/Projects/Projects';
import Information from './Pages/Information/Information';


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/information" element={<Information />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;