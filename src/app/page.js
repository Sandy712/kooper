import Image from 'next/image'
import style from './page.module.css'
import fin1 from "/public/fin1.png";
import fin2 from "/public/fin2.png";
import fin3 from "/public/fin3.png";
import tra from "/public/track1.png";
import Button from '@/components/Buttons/Button';

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
          <Button url="/about" text="Get started" />
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
          <Button url="/login" text="Get started" />
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
          <Button url="/about" text="Get started" />
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
          <Button url="/contact" text="Get started" />
        </div>
        <div className={style.item}>
          <Image src={tra} alt='find investor' className={style.img}></Image>
        </div>
      </div>
    </>
  )
}
