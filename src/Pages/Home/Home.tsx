import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import NavDrawer from '../../Components/NavDrawer';
import Audi from '../../Images/audi.png';




const Home: React.FC = (props) => {

  return (
    <>
      <NavDrawer />
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <img src={Audi} />
        <Typography>A Car For Every Occasion</Typography>
        </Grid>
      </Grid>
      
    </>
  );
}

export default Home;
