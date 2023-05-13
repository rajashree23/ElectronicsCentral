import "./mobile.layout.css";
import "./desktop.layout.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <section>
        <p className="description">
          Developed by <a href="https://rajashreeparhi.com">Rajashree ❤️ </a>
        </p>
      </section>
      <section className="social-media">
        <a href="https://github.com/rajashree23">
          <p>Github</p>
        </a>
        <a href="https://twitter.com/rajashreecodes">
          <p>Twitter</p>
        </a>
        <a href="https://www.linkedin.com/in/rajashreeparhi/">
          <p>LinkedIn</p>
        </a>
        <a href="https://rajashreeparhi.hashnode.dev/">
          <p>Article</p>
        </a>
      </section>
    </footer>
  );
};
