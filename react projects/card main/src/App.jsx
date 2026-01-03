
import React from "react";
import "./App.css";
import { CiHeart } from "react-icons/ci";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <img
            src="https://media.istockphoto.com/id/1018703724/photo/plant-tree-in-neutral-background-close-up-of-fresh-green-plant.jpg?s=612x612&w=0&k=20&c=Pfgp-cgbu71Wa2oxLcD6CcPYNtiFkfaLzkDESBrTEPk="
            alt="Peace Lily"
          />
        </div>
  

        <div className="right">
         <p className="heart"><CiHeart /></p>  
          <p className="back"> BACK TO ALL PLANTS</p>
          <h2>CLASSIC PEACE LILY</h2>
          <span className="subtitle">POPULAR HOUSE PLANT</span>

          <h3 className="price">$18</h3>

          <p className="desc">
            Classic Peace Lily is a spathiphyllum floor plant arranged in a
            bamboo planter with a blue & red ribbon and butterfly pick.
          </p>

          <div className="buttons">
            <button className="cart">ADD TO CART</button>
            <button className="wish">WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
