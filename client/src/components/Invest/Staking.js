import React, { useState } from "react";
//import "./Staking.css";


const Staking = () => {



  return (
  <div class="wrapper">
<div class="container_1">

<div class="card">
    <div class="left-column background1-left-column">
        <h6>Control de versiones</h6>
        <h2>스테이킹</h2>
        <i class="fa fa-github"></i>
    </div>

    <div class="right-column">
        <div>
            <h4>Dificultad</h4>
            <h6>Baja - Media</h6>

        </div>
        <h2>Aprende GitHub en 3 semanas</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, sintLorem ipsum dolor sit amet,
            consectetur adipisicing elit. Harum, sint??</p>
        <button class="button background1-left-column">스테이킹</button>
    </div>

</div>

<div class="card">
    <div class="left-column background2-left-column">
        <h6>Programación</h6>
        <h2>보상수령</h2>
        <i class="fa fa-android" aria-hidden="true"></i>
    </div>

    <div class="right-column">
        <div>
            <h4>Dificultad</h4>
            <h6>Media - Alta</h6>
        </div>
        <h2>Flutter en 1 año</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, sintLorem ipsum dolor sit amet,
            consectetur adipisicing elit. Harum, sint??</p>
        <button class="button background2-left-column">보상수령</button>
    </div>

</div>
</div>
  </div>
  );
};


export default Staking;