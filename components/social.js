import React from "react";
import styles from './Social.module.css'

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
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className={styles.svg}
                src={`/assets/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
              
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
