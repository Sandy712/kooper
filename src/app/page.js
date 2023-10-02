import Image from 'next/image'
import style from './page.module.css'
import fin1 from "/public/img/fin1.png";
import fin2 from "/public/img/fin2.png";
import fin3 from "/public/img/fin3.png";
import tra from "/public/img/track1.png";
import sol1 from "/public/img/solutions1.png"
import sol2 from "/public/img/solutions2.png"
import sol3 from "/public/img/solutions3.png"
import sol4 from "/public/img/solutions4.png"
import sol5 from "/public/img/solutions5.png"
import Buttons from '@/components/Buttons/Button';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TuneIcon from "@mui/icons-material/Tune";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebhookIcon from "@mui/icons-material/Webhook";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.item}>
          <h1 className={style.title}>
            Find Your Next Investment
          </h1>
          <p className={style.desc}>
            Identify high-growth startups and industry trends so you know where to invest.
          </p>
          <Buttons url="/about" text="Get started" />
        </div>
        <div className={style.item}>
          <Image src={fin1} alt='find investor' className={style.img}></Image>
        </div>
      </div>

      <div className={style.container2}>
        <h1 className={style.title}>
          Ayush makes smart investing easy.
        </h1>
        <p className={style.desc}>
          With private company data and AI-driven insight,you can find the best places to invest,discover hot startups, and track growing comapanies.
        </p>
      </div>

      <div className={style.container3}>
        <div className={style.item}>
          <h1 className={style.title}>
            Find Startips To Invest In
          </h1>
          <p className={style.desc}>
            Uncover new investment opportunities with access to over 2 million compaines,unlimited advanced search,and personalized recommendations.
          </p>
          <Buttons url="/login" text="Get started" />
        </div>
        <div className={style.item}>
          <Image src={fin2} alt='find investor' className={style.img}></Image>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.item}>
          <h1 className={style.title}>
            Monitor Industry Trends
          </h1>
          <p className={style.desc}>
            Stay up to date on hot startups and see where others are investing with company insights and news.
          </p>
          <Buttons url="/about" text="Get started" />
        </div>
        <div className={style.item}>
          <Image src={fin3} alt='find investor' className={style.img}></Image>
        </div>
      </div>

      <div className={style.container3}>
        <div className={style.item}>
          <h1 className={style.title}>
            Track Your Portfolio
          </h1>
          <p className={style.desc}>
            Upload existing company lists ti Ayush Portal to track growth signals,see verified contact details,and get real-time alters.
          </p>
          <Buttons url="/contact" text="Get started" />
        </div>
        <div className={style.item}>
          <Image src={tra} alt='find investor' className={style.img}></Image>
        </div>
      </div>










{/* HalfHome */}
      <Box>
      <Box className={style.advSearch}>
        <Typography id={style.advHeading} variant="h3" fontWeight={800}>
          Find the Companies to Invest in With Advanced Search
        </Typography>
        <Typography id={style.advSubHeading} variant="body1" fontWeight={200}>
          Here are some examples of custom searches created by investors like you. Edit these templates and make them
          your own with Ayush-portal.
        </Typography>
        <Box className={style.featureContainer}>
          <Box className={style.featureBox}>
            <Box sx={{ marginBottom: 3, backgroundColor: "#8551FD" }} className={style.circle}>
              <TuneIcon color="white" />
            </Box>
            <Typography className={style.fontSizemarginBottom} sx={{ marginBottom: 7 }} fontWeight={600}>
              Find your searches
            </Typography>
            <Typography className={style.fontSize} sx={{ marginBottom: 2 }}>
              {" "}
              Tailor your investment search with precision. Customize your criteria to discover startups that align with
              your goals effortlessly.
            </Typography>
            <Link className={style.fontSize}>Check this out </Link>
          </Box>
          <Box className={style.featureBox}>
            <Box sx={{ marginBottom: 3, backgroundColor: "#00C2A4" }} className={style.circle}>
              <WebhookIcon color="white" />
            </Box>
            <Typography className={style.fontSizemarginBottom} sx={{ marginBottom: 7 }} fontWeight={600}>
              Ask AI
            </Typography>
            <Typography className={style.fontSize} sx={{ marginBottom: 2 }}>
              {" "}
              Meet your AI investment advisor. Let smart algorithms match you with promising startups, simplifying your
              investment decisions.{" "}
            </Typography>
            <Link className={style.fontSize}>Check this out </Link>
          </Box>
          <Box className={style.featureBox}>
            <Box sx={{ marginBottom: 3, backgroundColor: "#FF5F65" }} className={style.circle}>
              <ManageSearchIcon color="white" />
            </Box>
            <Typography className={style.fontSizemarginBottom} sx={{ marginBottom: 7 }} fontWeight={600}>
              Checkout news section
            </Typography>
            <Typography className={style.fontSize} sx={{ marginBottom: 2 }}>
              {" "}
              Stay informed with real-time news. Access trending insights and updates in the startup ecosystem, keeping
              your knowledge up to date.{" "}
            </Typography>
            <Link className={style.fontSize}>Check this out </Link>
          </Box>
        </Box>
        <Button id={style.getStartedBtn} sx={{ borderRadius: 2, marginTop: 5 }} variant="Contained">
          Get Started
        </Button>
      </Box>
      <Box id={style.solutionsContainer}>
        <Typography id={style.advHeading} variant="h3" fontWeight={800}>
          Explore More Solutions
        </Typography>
        <Box id={style.solutionsGrid}>
          <Box className={style.solutionBox}>
            {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
            <Image id={style.replaceWithImage} src={sol1} width={100} height={100} alt="Connect People" />
            <Typography variant="body1" fontWeight={600}>
              Connect People
            </Typography>
          </Box>
          <Box className={style.solutionBox}>
            {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
            <Image id={style.replaceWithImage} src={sol2} width={100} height={100} alt="Find Investment" />
            <Typography variant="body1" fontWeight={600}>
              Find investment
            </Typography>
          </Box>
          <Box className={style.solutionBox}>
            {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
            <Image id={style.replaceWithImage} src={sol3} width={100} height={100} alt="Market Research" />
            <Typography variant="body1" fontWeight={600}>
              Market Research
            </Typography>
          </Box>
          <Box className={style.solutionBox}>
            {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
            <Image
              id={style.replaceWithImage}
              src={sol4}
              width={100}
              height={100}
              alt="Enrich Your Database"
            />{" "}
            <Typography variant="body1" fontWeight={600}>
              Enrich Your Database
            </Typography>
          </Box>
          <Box className={style.solutionBox}>
            {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
            <Image id={style.replaceWithImage} src={sol5} width={100} height={100} alt="Build Your Database" />
            <Typography variant="body1" fontWeight={600}>
              Build Your Startup
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={style.lastPortion}>
        <Typography id={style.advHeading} variant="h3" fontWeight={800}>
          Ready to get started?
        </Typography>
        <Button id={style.getStartedBtn} sx={{ borderRadius: 2, marginTop: 2.5 }} variant="Contained">
          Get Started
        </Button>
      </Box>
    </Box>

    </>
  )
}
