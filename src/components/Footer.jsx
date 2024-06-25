import React from 'react'

const Footer = () => {
  return (
    <div className="Footer"> 
        <ul type="none">
            <li font-weight="bold">About the author</li>
            <div className="author">
           <li><a target="_blank" href="https://github.com/shounakpatil">Github</a>
           </li>
            <li><a target='blank' href="https://www.instagram.com/theshounak_patil/">Instagram</a></li>
            </div>
            <li>{'\u00A9'} 2024 Shounak Patil</li>
        </ul>
    </div>
  )
}

export default Footer;