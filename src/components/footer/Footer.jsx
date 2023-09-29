//comment below for server-side renderning

"use client"


import React from 'react'

export default function Footer() {

  
  console.log("hi  i check the client and  server side rendering in this method in footer")

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='styles.logo'>
          <p>Comapany Logo</p>
        </div>
        <div className='contact'>
          <h4>Contact Us</h4>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='styles.social'>
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className='bottomBar'>
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  )
}
