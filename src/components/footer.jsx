
import React from 'react'
import axios from 'axios'

const Footer = ({footer, container, logo, description, title, link, bottom, social, copyright}) => {
  return (
    <footer className={footer}>
      <div className={container}>

        <div>
          <h2 className={logo}>
            DEN<span className="text-[#6C5CE7]">SHOP</span>
          </h2>

          <p className={description}>
            Your everyday essentials, delivered fresh.
            Shop your favorite groceries with DENSHOP!
          </p>

          <div className={social}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Telegram">Telegram</a>
          </div>
        </div>

        <div>
          <h3 className={title}>Quick Links</h3>
          <ul className={link}>
            <li><a href="/">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className={title}>Customer Service</h3>
          <ul className={link}>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#delivery">Delivery Information</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className={title}>Contact</h3>
          <ul className={link}>
            <li>✉ support@denshop.com</li>
            <li>🕒 Mon – Sat: 8:00 – 21:00</li>
            <li>🛒 Fresh groceries, happy life!</li>
          </ul>
        </div>

      </div>

      <div className={bottom}>
        <p className={copyright}>
          © {new Date().getFullYear()} DENSHOP.
          All rights reserved.
        </p>
        <p>Made with <span className="text-[#6C5CE7]">♥</span> for you</p>
      </div>
    </footer>
  )
}

export default Footer
