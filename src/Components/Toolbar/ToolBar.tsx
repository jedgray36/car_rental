import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const ToolBar: React.FC = (props) => {
  
  return (
       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "Purple"}}>
      <Toolbar>
      <Typography variant="h6" noWrap>
            Car Rentals
          </Typography>
      </Toolbar>
      </AppBar>
  );
}

export default ToolBar;
