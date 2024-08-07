import React from 'react';
import {AppBar, Toolbar, Typography, InputBase, IconButton, Box, Button} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.svg'; 
import HeartIcon from "../assets/icons/heart.svg";
import UserIcon from "../assets/icons/user.svg";
import BagIcon from "../assets/icons/bag.svg";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F1F1F1',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0.8),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
    '&::placeholder': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '18px',
        color: '#626262',
      },
  },
}));

const Header = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'white', color: 'black' ,height: '80px',padding: '6px 12px',margin: '0 auto'}} elevation={0}>
      <Toolbar >
      <div style={{ marginRight: 24 }}>
          <img src={logo} alt="Logo" style={{ width: '108px', height: '22px' }} />
      </div>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
          {['Handbags', 'Watches', 'Skincare', 'Jewelry', 'Apparels'].map((item) => (
            <Button
              key={item}
              component="a"
              href={`/${item.toLowerCase()}`}
              sx={{
                marginLeft: 1,
                marginRight: 1,
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
                color: 'black',
                textTransform: 'none', 
                fontFamily:'Inter'
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon fontSize="small" style={{ fontSize: 24 }}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for products or brands…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show favorite items" color="inherit" sx={{marginLeft: 3}}>
              <img src={HeartIcon} style={{ width: '24px' }} />
          </IconButton>
          <IconButton size="large" aria-label="user account" color="inherit" >
              <img src={UserIcon} style={{ width: '24px'}} /> 
          </IconButton>
          <IconButton size="large" aria-label="shopping cart" color="inherit" >
              <img src={BagIcon} style={{ width: '24px' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
