import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <section className="blogr__footer">
      <div className="footer__content inner-width">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Product</h3>
          <article className="footer__link-container">
            <a className="footer__link">Overview</a>
            <a className="footer__link">Pricing</a>
            <a className="footer__link">Marketplace</a>
            <a className="footer__link">Features</a>
            <a className="footer__link">Integrations</a>
          </article>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Company</h3>
          <article className="footer__link-container">
            <a className="footer__link">About</a>
            <a className="footer__link">Team</a>
            <a className="footer__link">Blog</a>
            <a className="footer__link">Careers</a>
          </article>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Connect</h3>
          <article className="footer__link-container">
            <a className="footer__link">Contact</a>
            <a className="footer__link">Newsletter</a>
            <a className="footer__link">LinkedIn</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Footer;
