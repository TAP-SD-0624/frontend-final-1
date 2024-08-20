import React, { useState,useEffect } from 'react';
import {Outlet, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from '../lib/utils';

const ProtectedRoute = ({children, ...props}) => {
    const navigate =useNavigate();

    
  return (
    <Outlet/>
  )
}

export default ProtectedRoute
