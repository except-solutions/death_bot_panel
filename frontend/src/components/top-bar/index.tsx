import React, { useContext } from 'react';
import { Box, Grid, Icon, IconButton, InputBase, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext, tokens } from '../../theme';
import { useStyles } from './styles';

const TopBarComponent = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid>Welcome</Grid>
      <Box display="flex">
        <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
          <IconButton className={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
