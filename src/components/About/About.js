import React, { Fragment, useState } from "react";
import "../About/About.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// import img1 from "../../public/images/ahenlogo.png";
// import Gaurav from '../images/ahenlogo.jpg';
// import KDS from '../images/ahenlogo.jpg';

// import img from './images/ahenbg.jpg';

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <Fragment>
      <div>
        {" "}
        <Navbar />
      </div>

      <section className="about">
        <div className="row">
          {/* <div className="column">
<div className="about-img"></div>
</div> */}

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>ABOUT US </h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>OUR TEAM</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>SERVICES</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h3>WHO WE ARE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet nostrum laborum porro pariatur minima tenetur.
                  Adipisci obcaecati placeat ex veritatis est delectus sunt,
                  quam doloribus nemo sed perferendis ipsa corporis? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eveniet nostrum
                  laborum porro pariatur minima tenetur. Adipisci obcaecati
                  placeat ex veritatis est delectus sunt, quam doloribus nemo
                  sed perferendis ipsa corporis?
                </p>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet nostrum laborum porro pariatur minima tenetur.
                  Adipisci obcaecati placeat ex veritatis est delectus sunt,
                  quam doloribus nemo sed perferendis ipsa corporis? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eveniet nostrum
                  laborum porro pariatur minima tenetur. Adipisci obcaecati
                  placeat ex veritatis est delectus sunt, quam doloribus nemo
                  sed perferendis ipsa corporis loribus nemo sed perferendis
                  ipsa corporis?
                </p>
              </div>

              {/* team Content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>OUR TEAM</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet nostrum laborum porro pariatur minima tenetur.
                  Adipisci obcaecati placeat ex veritatis est delectus sunt,
                  quam doloribus nemo sed perferendis ipsa corporis?
                </p>

                <div class="rows">
                  <div class="columns">
                    <div class="card">
                      <img src="https://ik.imagekit.io/sojj4lsbs/ahenlogo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675491731044" alt="Harshad" style={{ width: "100%" }} />
                      <div class="container">
                        <h2>Harshad</h2>
                        <p class="title">CEO &amp; Founder</p>
                        <p>
                          Some text that describes me lorem ipsum ipsum lorem.
                        </p>
                        <p>example@example.com</p>
                        <p>
                          <button class="button">Contact</button>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="card">
                      <img src="https://ik.imagekit.io/sojj4lsbs/ahenlogo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675491731044" alt="Gaurav" style={{ width: "100%" }} />
                      <div class="container">
                        <h2>Gaurav</h2>
                        <p class="title"> Director&COO</p>
                        <p>
                          Some text that describes me lorem ipsum ipsum lorem.
                        </p>
                        <p>example@example.com</p>
                        <p>
                          <button class="button">Contact</button>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="card">
                      <img src="https://ik.imagekit.io/sojj4lsbs/ahenlogo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675491731044" alt="KDS" style={{ width: "100%" }} />
                      <div class="container">
                        <h2>KDS</h2>
                        <p class="title">CTO&CMO</p>
                        <p>
                          Some text that describes me lorem ipsum ipsum lorem.
                        </p>
                        <p>example@example.com</p>
                        <p>
                          <button class="button">Contact</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* services Content */}


              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="ser-column">
                  <h3>driving licennse</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error rem dicta perferendis et qui obcaecati labore
                    accusantium cupiditate libero.
                  </p>
                </div>

                <div className="ser-column">
                  <h3> driving School</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error rem dicta perferendis et qui obcaecati labore
                    accusantium cupiditate libero.
                  </p>
                </div>

                <div className="ser-column">
                  <h3>abcdchs</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error rem dicta perferendis et qui obcaecati labore
                    accusantium cupiditate libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
