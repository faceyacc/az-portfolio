import React from "react";
import styles from "./Social.module.css";

const SocialShare = [
  // {
  //   iconName: "facebook",
  //   link: "https://www.facebook.com/",
  // },
  // { iconName: "twitter", link: "https://twitter.com/" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/a.to.zstudio",
  },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];


const Social = () => {
  return (
    <>
      <ul className={styles.social}>
        <li>
          <a href="https://www.instagram.com/a.to.zstudio">
            <img
              className={styles.svg}
              src={"/assets/svg/social/instagram.svg"}
              alt={"social"}
            />
          </a>
        </li>
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
