import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStyles } from './styles';
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { ChevronLeftOutlined, ChevronRightOutlined, LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu } from '../../common/mocs/navigate';
import Logo from '../../assets/images/sidebar/Logo.png';

const SidebarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNoneMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const renderNavMenu = navMenu.map((element): JSX.Element => {
    return (
      <ListItem key={element.id}>
        <ListItemText>
          <ListItemButton className={classes.navItem} onClick={() => navigate(`${element.path}`)}>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <Typography variant={'body1'}> {element.name} </Typography>
          </ListItemButton>
        </ListItemText>
      </ListItem>
    );
  });

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              background: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} width="50px" height="50px" alt="Logo image" />
                  <Typography variant="h1" className={classes.brandTitle}>
                    DeathBot
                  </Typography>
                </Box>
                {!isNoneMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined></ChevronLeftOutlined>
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List className={classes.navList}>{renderNavMenu}</List>
          </Box>
          <Box width="100%">
            <List>
              <ListItem>
                <ListItemButton className={classes.navItem}>
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SidebarComponent;
