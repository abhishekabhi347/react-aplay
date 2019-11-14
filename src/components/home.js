import React, { Fragment } from "react";
import "../styles/home.scss";
const Home = () => {
  return (
    <Fragment>
      <header>
        <h2>About APlay</h2>
      </header>

      <section>
        <article>
          <p>APlay is all about funny little idea's of a software developer.</p>

          <div className="container-wrapper">
            <div className="card gamingcard">
              <div className="container">
                <h3>
                  <b>Gaming</b>
                </h3>
                <p><img
                    style={{float:"none"}}
                    src="https://img.icons8.com/plasticine/100/000000/nintendo-gamecube-controller.png"
                  />Gaming is the running of specialized applications known as
                  electronic games or video games on game consoles like X-box
                  and Playstation or on personal computers (in which case the
                  activity is known as online gaming). The term "gaming"
                  originated as a synonym for "gambling" although most
                  electronic games today do not involve gambling in the
                  traditional sense.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Home;
