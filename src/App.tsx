import React from 'react';

import './App.css';
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home/Home';
import RentACar from './Pages/RentACar/RentACar';
import Invoices from './Pages/Invoices';


 const App: React.FC = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path='/rent' element={<RentACar />}/>
      <Route path='/invoices' element={<Invoices />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
