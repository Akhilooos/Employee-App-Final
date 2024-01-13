import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const NavbarEmp = ({ route }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Employee Dashboard
      </Typography>
      <Divider />
      <List>
      <ListItem disablePadding>
      <Link to={"/view"} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary="View All Employees" />
        </ListItemButton>
      </Link>
      </ListItem>
        <ListItem disablePadding>
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: 'teal' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Employee Dashboard
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button component={Link} to="/view" sx={{ color: '#fff' }}>
                View All Employees
              </Button>
              <Button component={Link} to="/login" sx={{ color: '#fff' }}>
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={window.document.body}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3, paddingTop: '64px' }}>
          <Toolbar />
          </Box>
      </Box>
    </div>
  );
};

export default NavbarEmp;
