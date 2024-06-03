import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import opacity from "../../assets/opacity.png";
import ModelS from "../../assets/model3.png";

const Index = () => {
  return (
    <div className="header">
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="/" id="models">
              Model S
            </a>
          </li>
          <li>
            <a href="#" id="model3">
              Model 3
            </a>
          </li>
          <li>
            <a href="#" id="modelx">
              Model X
            </a>
          </li>
          <li>
            <a href="#" id="modely">
              Model Y
            </a>
          </li>
          <li>
            <input className="input" type="text" placeholder="Search" />
          </li>
          <li>
            <a href="#" className="profile_icon">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>


      
     
      <div className="opacity_model3">
        <img src={opacity} alt="Opacity effect" />
      </div>{" "}
      <img className="ModelS_css" src={ModelS} alt="" />
      <div className="info">
        <div>
          <h2>1.9s</h2>
          <p>60mph</p>
        </div>
        <div>
          <h2>200mph</h2>
          <p>Top Speed</p>
        </div>
        <div>
          <h2>396mi</h2>
          <p>Max Range</p>
        </div>
        <div className="line"></div>
        <div>
          <h2 id="model">Model S</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
