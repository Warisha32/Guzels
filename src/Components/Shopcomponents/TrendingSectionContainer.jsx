import React from 'react';
import Product from './Product';
import "../../Styles/main.scss"

const TrendingSectionContainer = () => {
  return <>
    <div id="shopScreenMainContainer">
        {/* <div className="shopImageContainer">
        </div> */}
        <div className="shop-container">
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
                         </div>
            </div>

  </>;
};

export default TrendingSectionContainer;
