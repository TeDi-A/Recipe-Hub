import React from "react";
import Loader from "./StyledHeader";

const HeroHeader = () => {

  return (
    <div>
      <div className="hero-img" >
        <img src="src/public/assets/images/pasta-image.jpg" alt="" />

        <div className="hero-text">
    
          <h1>Checkout</h1>
          <Loader />
          <h1>Recipes</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
