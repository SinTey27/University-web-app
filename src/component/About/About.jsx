import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          ducimus expedita sed corrupti autem voluptatem necessitatibus
          voluptate perspiciatis recusandae? Officia voluptas vero dolore dolor
          fugit soluta molestias commodi iusto fugiat, cumque quibusdam.
        </p>
        <p>
          Assumenda amet quisquam dicta sed nostrum voluptatem repellendus
          dolorem cum vel? Vitae quis dolore optio? Sint incidunt laboriosam
          quaerat aut voluptatem architecto ipsum voluptas, ex ea minima iustm.
        </p>
        <p>
          Nemo provident eius similique itaque iste suscipit minima
          necessitatibus! Maxime atque quam ex voluptatem sapiente perspiciatis
          repudiandae aspernatur quisquam. Voluptas molestias distinctio numquam
          necessitatibus illo.
        </p>
      </div>
    </div>
  );
}

export default About;
