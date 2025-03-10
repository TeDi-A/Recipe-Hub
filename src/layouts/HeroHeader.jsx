import React from "react";
import Loader from "./StyledHeader";
// import pastaImg  from "public/assets/images/pasta-image.jpg";

const HeroHeader = () => {
  // const background = pastaImg

  return (
    <div>
      <div className="hero-img">
        <img src="public/images/pasta-image.jpg" alt="" />

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
