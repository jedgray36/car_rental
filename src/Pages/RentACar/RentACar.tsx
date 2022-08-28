import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { AppBar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavDrawer from '../../Components/NavDrawer';
import { car } from '../../Interfaces/car';




const RentACar: React.FC = (props) => {
  const [cars, setCars] = useState<car | any>();


  useEffect(() => {
    const FetchData = async () => {
      const data = await fetch('https://raw.githubusercontent.com/jedgray36/car_rental/master/src/Cars.json')
      .then(res => res.json())
      .then(json => setCars({ data: json }));
    }
    FetchData()
  },[cars])
  
  
  return (
    <>
  <NavDrawer/>
    {cars}

    </>
  );
}

export default RentACar;
