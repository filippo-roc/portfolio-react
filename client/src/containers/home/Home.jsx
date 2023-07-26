import React from "react";
import "./Home.css"
import curriculum from "../../assets/Curriculum.pdf"
import myPhoto from "../../assets/my-photo2.png";
const Home = () => {
  return (
    <section id="Home" className="section home">
      <main className="home-main">
        <div className="home-container">
          <h1 className="home-title">
            Ciao sono{" "}
            <div className="special">
              <span className="special__text">Filippo Roccamatisi</span>
              <span className="special__effect"></span>
            </div>{" "}
            un giovane sviluppatore specializzato nell'utilizzo dello stack MERN
          </h1>
          <div className="home-btn-container">
            <button className="home-btn ">
              <a
                target="_blank"
                className="btn btn--special"
                href={curriculum}
              >
                {" "}
                Il mio CV
              </a>
            </button>
            <button className="home-btn">
              <a className="btn home-btn__contact"  href="mailto:filippo.roccamatisi2003@gmail.com">
                Contattami
              </a>
            </button>
          </div>
        </div>
        <div className="home-container img-section">
          <div className="home-img-container">
            <img className="home-img" src={myPhoto} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;