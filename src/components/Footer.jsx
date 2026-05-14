import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-brand-title">
            <img src="/flag.png" alt="Druk Journey logo" className="footer-logo" />
            <h3>Druk Journey</h3>
          </div>
          <p>Explore Bhutan's most beautiful destinations and culture.</p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/1HbYLQmAu1/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/wangyel__olo?igsh=MWp5NDI1bnlnNXZmag=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/pema-wangyel-14a540333"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <p className="footer-copy">© 2026 Druk Journey. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
