import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import webanim from '../public/assets/webanim.mp4';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.tokyo_tm_home}>
        <div className={styles.home_content}>
          <div className={styles.avatar}>
            {/* <Image src="/../public/assets/webanim.mp4" width={500} height={500} alt="bigweb" /> */}
            {/* <video src={webanim} className={styles.videoContainer} autoPlay muted loop/> */}

            <div
              className="image avatar_img"
            ><video src={webanim} className={styles.avatar} autoPlay muted loop/></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className={styles.details}>
            <h3 className={styles.name}>A to Z Studio</h3>
            <p className={styles.job}>
              Hi! Angelica and Zach here. She likes to draw, he likes to
              animate, and together, we are A to Z Studio. Welcome to our
              multifaceted and explorative studio where we combine our love for
              art, design, animation & more! We are an artist-duo that enjoys
              creating and building anything between the letters A to Z. Test
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
