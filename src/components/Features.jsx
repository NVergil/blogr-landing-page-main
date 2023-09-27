import illustrationEditorDesktop from "../assets/images/illustration-editor-desktop.svg";
import "./styles/Features.css";

const Features = () => {
  return (
    <section className="blogr__features">
      <h2 className="features__title">Designed for the future</h2>
      <div className="features__content-container">
        <div className="features__content inner-width">
          <article className="features__text">
            <h3 className="features__subtitle">
              Introducing an extensible editor
            </h3>
            <p className="features__description">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="features__subtitle">Robust content management</h3>
            <p className="features__description">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
          <div className="features__visuals"></div>
        </div>
      </div>
      <img src={illustrationEditorDesktop} alt="editor-desktop" />
    </section>
  );
};

export default Features;
