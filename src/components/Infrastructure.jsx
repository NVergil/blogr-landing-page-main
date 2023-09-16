import illustrationPhones from "../assets/images/illustration-phones.svg";
import bgPatternCircles from "../assets/images/bg-pattern-circles.svg";
import "./styles/Infrastructure.css"

const Infrastructure = () => {
  return (
    <section className="blogr__infrastructure ">
      <div className="infrastructure__illustration-circles">
        <img
          className="bg-pattern-circles"
          src={bgPatternCircles}
          alt="bg-pattern-circles"
        />
      </div>
      <div className="infrastructure__container inner-width">
        <div className="infrastructure__illustration-phones">
          <img src={illustrationPhones} alt="illustration-phones" />
        </div>
        <article className="infrastructure__text">
          <h2 className="infrastructure__title">
            State of the Art Infrastructure
          </h2>
          <p className="infrastructure__description">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Infrastructure;
