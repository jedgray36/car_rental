import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import ToolBar from '../Toolbar/ToolBar';
import Draw from './Draw';

  
const drawerWidth = 240;

interface Props {
    window?: () => Window;
  }

const NavDrawer: React.FC = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

      const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

      <CssBaseline />
      <AppBar
        position="fixed" 
        sx={{
            color: "white",
            backgroundColor: "Grey",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </AppBar>
      <Box
        component="nav"
        sx={{backgroundColor: 'Grey',  width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            color: "white",
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {<Draw/>}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: "Grey",
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'darkgray' },
          }}
          open
        >
          {<Draw/>}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>

    </>
  );
}

export default NavDrawer;
