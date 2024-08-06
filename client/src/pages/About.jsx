import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why ME? </h1>
              <p>
                connect and know
              </p>
              
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* <Analytics /> */}
    </>
  );
};