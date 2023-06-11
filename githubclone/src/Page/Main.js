import React from 'react';
import Header from '../Component/Header';

import TrendingHead from '../Component/TrendingHead';
import TrendingRepo from '../Component/TrendingRepo';
import { Outlet } from 'react-router-dom';




const Main = () => {
  
  return (
    <>
    <Header/>
    <TrendingHead/>
    <TrendingRepo/>
    <Outlet/>
    

    </>
  );
}

export default Main;
