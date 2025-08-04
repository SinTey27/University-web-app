import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Tigist Getabalew</h3>
                  <span>Mizan-Tepi, Ethiopia</span>
                </div>
              </div>
              <p>
                "The diverse community and cutting-edge resources at Mizan-Tepi
                University have transformed my learning experience. I feel
                prepared for the real world!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sintayehu Getabalew</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <p>
                "The hands-on projects and supportive faculty at Addis Ababa
                University have been instrumental in my growth as an engineer. I
                couldn't ask for a better environment!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Maya H/mikael</h3>
                  <span>Arbaminich, Ethiopia</span>
                </div>
              </div>
              <p>
                Studying at Arbaminch University has allowed me to explore my
                creativity while receiving top-notch guidance. It’s truly a
                nurturing space for artists."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Yabest H/mikael</h3>
                  <span>Jimma, Ethiopia</span>
                </div>
              </div>
              <p>
                "The innovative curriculum and collaborative atmosphere at Jimma
                University have sharpened my skills and opened countless
                opportunities in tech."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
