import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Breadcrumb = () => {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb : "14px" ,mt : 0 }}>
      <Link underline="hover"  href="/" sx={{color :"#1B4B66" , fontWeight : 600 , fontSize : "16px"}}>
        Home
      </Link>
      <Link underline="hover" href="/handbag" sx={{color :"#1B4B66" , fontWeight: "600" ,fontSize : "16px"}}>
        Handbag
      </Link>
      <Typography color="#626262"sx={{fontSize : "16px" , fontWeight : 500}}>Label</Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
