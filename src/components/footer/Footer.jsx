import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";


export default function Footer() {
  return (

    <div className="footer">
      <div className="linksColumn">
        <div className="column">
          <Typography fontWeight={400} variant="h6">
            Who We Are
          </Typography>
          <Link className="Link" fontWeight={100} variant="caption" href="/company">
            Company
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/careers">
            Careers
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/partners">
            Partners
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/blog">
            Blog
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/press">
            Press
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/contact us">
            Contact
          </Link>
        </div>
        <div className="column">
          <Typography fontWeight={400} variant="h6">
            What We Do
          </Typography>
          <Link className="Link" fontWeight={100} variant="caption" href="/company">
            Crunchbase Starter
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/careers">
            Crunchbase Pro
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/partners">
            Crunchbase Enterprise
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/blog">
            Crunchbase Data Licensing
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/press">
            Customer Stories
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/contact us">
            Pricing
          </Link>
        </div>
        <div className="column">
          <Typography fontWeight={400} variant="h6">
            Browse By:
          </Typography>
          <Link className="Link" fontWeight={100} variant="caption" href="/company">
            Organizations
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/careers">
            People
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/partners">
            Events
          </Link>
        </div>
        <div className="column">
          <Typography fontWeight={400} variant="h6">
            Stay Connected
          </Typography>
          <Link className="Link" fontWeight={100} variant="caption" href="/company">
            Crunchbase News
          </Link>
          <Link className="Link" fontWeight={100} variant="caption" href="/careers">
            Subscribe to the Crunchbase Daily
          </Link>
          <div className="socials">
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <LinkedInIcon className="icons" />
            <InstagramIcon className="icons" />
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <Link className="Link linkMargin ayushPortal" fontWeight={900} variant="h5">
          Ayush-Portal
        </Link>
        <Link className="Link linkMargin" variant="caption">
          © 2023 Crunchbase Inc. All Rights Reserved.
        </Link>
        <Link className="Link linkMargin" variant="caption" href="/termsOfService">
          Terms of Service
        </Link>
        <Link className="Link linkMargin" variant="caption" href="/privacyPolicy">
          Privacy Policy
        </Link>
        <Link className="Link linkMargin" variant="caption" href="/Partners">
          Editorial Partners: Verizon Media Tech
        </Link>
      </div>
    </div>







    // <footer className='footer'>
    //   <div className='container'>
    //     <div className='styles.logo'>
    //       <p>Comapany Logo</p>
    //     </div>
    //     <div className='contact'>
    //       <h4>Contact Us</h4>
    //       <p>Email: info@company.com</p>
    //       <p>Phone: (123) 456-7890</p>
    //     </div>
    //     <div className='styles.social'>
    //       <h4>Follow Us</h4>
    //       <a href="#">Facebook</a>
    //       <a href="#">Twitter</a>
    //       <a href="#">LinkedIn</a>
    //     </div>
    //   </div>
    //   <div className='bottomBar'>
    //     &copy; {new Date().getFullYear()} Company Name. All rights reserved.
    //   </div>
    // </footer>
  )
}
