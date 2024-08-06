// const Home = () =>{
// return <h1>homee</h1>
// }

// export default Home;
//export default nont working

import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>I AM THE BEST</p>
              <h1>Welcome  to Panel</h1>
              <p>
                -------
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>            
          </div>
        </section>
      </main>
    </>
  );
};