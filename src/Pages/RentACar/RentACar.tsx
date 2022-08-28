import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { AppBar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavDrawer from '../../Components/NavDrawer';
import { car } from '../../Interfaces/car';



const FetchCars = 'https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json';

const RentACar: React.FC = (props) => {
  const [cars, setCars] = useState<car | any>();


  useEffect(() => {
    const FetchData = async () => {
      const data = await fetch('https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json')
      .then(res => res.json())
      .then(json => setCars({ data: json }));
    }
    FetchData()
  },[FetchCars])
  
  
  return (
    <>
  <NavDrawer/>
    {cars}

    </>
  );
}

export default RentACar;
