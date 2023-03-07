import styles from "@/styles/House.module.css";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Absence = () => {
  const photos = [
    { src: "/assets/absence/oil.png", alt: "House No. 1" },
    { src: "/assets/absence/matches.png", alt: "House No. 2" },
    { src: "/assets/absence/wood.png", alt: "House No. 3" },
  ];

  return (
    <>
 
        <div className={styles.tokyo_tm_portfolio}>
          <div className={styles.tokyo_tm_title}>
            <div className={styles.absence_title}>
              <div className={styles.left}>
                <h3 data-aos="fade-down" data-aos-duration="1200">
                  Absence
                </h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className={styles.portfolio_filter}>
            {/* END TABLIST */}
            <div className={styles.list_wrapper}>
              <div className={styles.absence_portfolio_view}>
                {photos.map((photo) => (
                  <li data-aos="fade-right" data-aos-duration="1200">
                    <div>
                      <div>
                        <a>
                          <Tooltip
                            hideArrow
                            content={photo.alt}
                            css={{
                              color: "black",
                              backgroundColor: "white",
                              marginTop: "40%",
                              borderRadius: "0px",
                            }}
                          >
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              data-tip
                              data-for="shot"
                            />
                          </Tooltip>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Absence;
