import { Button } from "@mui/material";
import bgPatternIntroDesktop from "../assets/images/bg-pattern-intro-desktop.svg";
import Navbar from "../components/Navbar";
import "../components/styles/BlogrHeader.css";

const BlogrHeader = () => {
  return (
    <header className="blogr__header">
      <img className="header__bg-pattern-desktop" src={bgPatternIntroDesktop} alt="desktop-pattern" />
      <div className="header__content inner-width">
        <Navbar />
        <h1 className="header__title">A modern publishing platform</h1>
        <h2 className="header__subtitle">
          Grow your audience and build your online brand
        </h2>
        <div className="header__buttons">
          <Button variant="text" className="header__start-free">Start for Free</Button>
          <Button variant="text" className="header__learn-more">Learn More</Button>
        </div>
      </div>
    </header>
  );
};

export default BlogrHeader;
