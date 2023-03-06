import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from './Sidebar.module.css';


const Sidebar = ({ children }) => {

  // Hover dropdown menu
  const [isHover, toggleHover] = useState(false)

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };


  return (
    <div className={styles.tokyo_tm_all_wrap}>
      <div className={styles.leftpart}>

        <div className={styles.leftpart_inner}>
          <div className="logo">
            <Link className={styles.navbar_brand} href="/">
              <Image src="/../public/logo.png" width={150} height={150} alt="az-logo" />
            </Link>
            {/* END LOGO */}
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
                onHoverStart={toggleHoverMenu}
                onHoverEnd={toggleHoverMenu}
              >
                <li>
                  <span className={styles.menu_content}> Series </span>
                </li> 
                <motion.div
                  className="sub-menu"
                  initial="exit"
                  animate={isHover ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <div className={styles.dropdown_menu_container}>
                    <li><Link href="/portfolio/house">House</Link></li>
                    <li><Link href="/portfolio/absence" >Absence</Link></li>
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
            <div className={styles.container}>
              {children}
            </div>
          </div>
        </div>
    </div>


  )
}

export default Sidebar