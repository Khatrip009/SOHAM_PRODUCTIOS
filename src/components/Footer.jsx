export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Soham Productions</h3>
          <p>Crafting Quality, Weaving Style since 2010. A trusted name in premium garment manufacturing.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#quality">Quality Assurance</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><a href="#products">Kids T-Shirts</a></li>
            <li><a href="#products">Women T-Shirts</a></li>
            <li><a href="#products">Plazo Pants</a></li>
            <li><a href="#products">Dhoti Pants</a></li>
            <li><a href="#products">Track Pants</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <div><i className="fas fa-map-marker-alt"></i> Minubhai ni Uladi, Navsari, Gujarat - 396445</div>
            <div><i className="fas fa-phone"></i> <a href="tel:+918046069996">+91-8046069996</a></div>
            <div><i className="fas fa-envelope"></i> <a href="mailto:info@sohamproduction.com">info@sohamproduction.com</a></div>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Soham Productions. All rights reserved. | Designed by EXOTECH Developers</div>
    </footer>
  )
}
