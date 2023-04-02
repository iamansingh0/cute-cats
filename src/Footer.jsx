import React from 'react'
import { socialLinks } from './data'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='links'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id} className='link'>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Random Cute Cats <span>   </span>
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
