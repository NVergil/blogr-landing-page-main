import illustrationLaptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import "./styles/About.css";

const About = () => {
  return (
    <section className="blogr__about">
      <img src={illustrationLaptopDesktop} alt="illustration-laptop-desktop" />
      <div className="about__content inner-width">
        <div className="about__visuals"></div>
        <article className="about__text">
          <h2 className="about__subtitle">Free, open, simple</h2>
          <p className="about__description">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h2 className="about__subtitle">Powerful tooling</h2>
          <p className="about__description">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
