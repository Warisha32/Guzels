import React from 'react';
import Footer from "../Components/Footer";
// import Product from '../Components/ShopComponents/Product';

import Banner from "../Components/Banner";
import TrendingSectionContainer from "../Components/Shopcomponents/TrendingSectionContainer";


const Home = () => {
  return <div>
  <Banner/>
      <TrendingSectionContainer/>
      <Footer/>
  </div>;
};

export default Home;
