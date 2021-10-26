import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Contact Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
          <h2>
              GitHub: <a href="https://github.com/raevindunson">raevindunson</a>
          </h2>
          <h2>
              Email: <a href="mailto:raevin.dunson98@gmail.com">raevin.dunson98@gmail.com</a>
          </h2>
      </div>
    </section>
  );
}

export default About;
