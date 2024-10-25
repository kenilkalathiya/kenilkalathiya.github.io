import React from "react";

export default function Project() {
  return (
    <>
      <div class="timeline">
        <div className="main-timeline">
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="content">
              <h3>Health Scal – Health Care Application </h3>
              <p>Technologies Used: React.js, Flask, Machine Learning </p>
            </div>
            <div class="year-box">2023</div>
          </div>
          <ul className="subject">
            <li>
              {" "}
              Analyse prediction of different disease based on patient medical report. {" "}
            </li>
            <li>
            It gives accurate decision based on machine learning model. 
            </li>
          </ul>
        </div>

        <div className="main-timeline">
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="content">
              <h3>GMTV - Movie/Series Information System</h3>
              <p>Technologies Used: React.js, Node.js </p>
            </div>
            <div class="year-box">2022</div>
          </div>
          <ul className="subject">
            <li>
              {" "}
              Created a Movie/Series Information System for data collection.{" "}
            </li>
            <li>
              It Provide all information about movie and series and user can
              store the data about watched content.
            </li>
          </ul>
        </div>

        <div className="main-timeline">
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="content">
              <h3>Spam Predictor - Web Application</h3>
              <p>Technologies Used: HTML/CSS, JavaScript, Machine Learning</p>
            </div>
            <div class="year-box">2020-2021</div>
          </div>
          <ul className="subject">
            <li> It contains spam mails detection and fake news detection. </li>
            <li>
              {" "}
              It does real-time content analysis based on machine learning
              model.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
