import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ToolBar from '../../Toolbar/ToolBar';


const NavData = [
  {id: 0, Name: 'Home', Path: '/'},
  {id: 1, Name: 'Rent A Car', Path: '/rent'},
  {id: 2, Name: 'Invoices', Path: '/invoices'}
]


const Draw: React.FC = (props) => {

  let navigate = useNavigate(); 

  const routeChange = (path: any) =>{ 
    navigate(path);
  }
  
  return (
    <>
      <ToolBar />
      <List sx={{paddingTop: "80px", color: "white"}}>
        {NavData.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => routeChange(text.Path)}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider/>
    </>
  );
}

export default Draw;
