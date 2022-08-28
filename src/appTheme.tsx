import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, createTheme, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { orange } from '@mui/material/colors';


declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }

    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }


const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

