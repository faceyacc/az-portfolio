import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { Tooltip } from "@nextui-org/react";


const Sidebar = ({ children }) => {
  // Hover dropdown menu
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className={styles.tokyo_tm_all_wrap}>
      <div className={styles.leftpart}>
        <div className={styles.leftpart_inner}>
          <div className="logo">
            <Link className={styles.navbar_brand} href="/">
              {/* <Image src="/logo.png" height={200} width={200} alt="az-logo" /> */}
              <img src="/logo.png"/>
            </Link>
          </div>

          <div className={styles.menu}>
            <ul>
              <li>
                <Link href="/">
                  <span className={styles.menu_content}> Home </span>
                </Link>
              </li>
              <motion.div
                className="menu-item"
                onClick={toggleMouseMenu}
                // onHoverStart={toggleMouseMenu}
                // onHoverEnd={toggleMouseMenu}
              >
                <li>
                  <span className={styles.menu_content}> Series </span>
                </li>
                <motion.div
                  className={styles.sub_menue}
                  initial="exit"
                  animate={isMouse ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <div className={styles.dropdown_menu_container}>
                    <li>
                      <Link href="/portfolio/house">House</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/absence">Absence</Link>
                    </li>
                  </div>
                </motion.div>
              </motion.div>
              <li>
                <Link href="/contact">
                  <span className={styles.menu_content}> Contact </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.rightpart}>
        <div className={styles.rightpart_in}>
          <div className={styles.tokyo_tm_section}>
          <div className={styles.container}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
