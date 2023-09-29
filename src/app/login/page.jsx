import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import style from './page.module.css'


export default function login() {
  return (
    <section className={style.container}>
      <header className={style.header}>
        <p style={{ fontSize: "60px" }}>Login /sign up</p>
        <p>Get In Touch With Us</p>
      </header>
      <section className={style.contactcontainer}>
        <article className={style.right}>
          <h1 style={{ fontSize: '20px', wordWrap: 'break-word' }}>Follow Us</h1>
          <div className={style.sociallinks}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer noopener">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
              <FaInstagram />
            </a>
            <a href="/" target="_blank" rel="noreferrer noopener">
              <FaPhone />
            </a>
          </div>
        </article>
        <article className={style.rightmain}>
          {/* <h1 style={{ marginBottom: "25px" }}>Contact Us</h1> */}
          <form className={style.uform}>
            <article className={style.form}>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" name="Full_name" placeholder="Enter Your Full Name" />
            </article>
            <article className={style.form}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="Email" placeholder="Enter Your Email Address" />
            </article>
            <article className={style.form}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name="Phone_no" placeholder="Enter Your Phone Number" />
            </article>
            <article className={style.form}>
              <label htmlFor="message">Message</label>
              <textarea id="message" type="text" name="Message" placeholder="Write Your Message" ></textarea>
            </article>
            <article>
              <button className={style.done} type="submit">Send Message</button>
            </article>
          </form>
        </article>
      </section>
    </section>
  )
}
