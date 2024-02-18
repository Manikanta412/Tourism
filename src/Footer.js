import React from 'react'
import './Footer.css'
 const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <h3>About Us</h3>
        <p>Insert your about us content here.</p>
      </div>
      <div class="footer-column">
        <h3>Contact Us</h3>
        <p>Insert your contact information here.</p>
      </div>
      <div class="footer-column">
        <h3>Follow Us</h3>
        <ul class="social-media-icons">
          <li><a href="#"><i class="fab fa-facebook">facebook</i></a></li>
          <li><a href="#"><i class="fab fa-twitter">twitter</i></a></li>
          <li><a href="https://www.instagram.com/haris_wanderlust/?hl=en"><i class="fab fa-instagram">instagram</i></a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>
  
  )
}
export default Footer;