import Image from "next/image";
import styles from "@/styles/House.module.css";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();


const House = () => {
  const photos = [
    { src: "/assets/house_series/h1.png", alt: "House No. 1" },
    { src: "/assets/house_series/h2.png", alt: "House No. 2" },
    { src: "/assets/house_series/h3.png", alt: "House No. 3" },
    { src: "/assets/house_series/h4.png", alt: "House No. 4" },
    { src: "/assets/house_series/h5.png", alt: "House No. 5" },
    { src: "/assets/house_series/h6.png", alt: "House No. 6" },
    { src: "/assets/house_series/h7.png", alt: "House No. 7" },
    { src: "/assets/house_series/h8.png", alt: "House No. 8" },
    { src: "/assets/house_series/h9.png", alt: "House No. 9" },
    { src: "/assets/house_series/h10.png", alt: "House No. 10" },
    { src: "/assets/house_series/h11.png", alt: "House No. 11" },
    { src: "/assets/house_series/h12.png", alt: "House No. 12" },
  ];

  return (
    <>
      <div className={styles.tokyo_tm_portfolio}>
        <div className={styles.tokyo_tm_title}>
          <div className={styles.series_title}>
            <div>
              {/* <span>House Series</span> */}
                <h3
                  className={styles.series_title_w}
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  House
                </h3>

                <p
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  “The house has grown into a knowledgeable witness. It has been
                  party to early seductions, it has watched homework being
                  written, it has observed swaddled babies freshly arrived from
                  hospital, it has been surprised in the middle of the night by
                  whispered conferences in the kitchen. It has experienced
                  winter evenings when its windows were as cold as bags of
                  frozen peas and midsummer dusks when its brick walls held the
                  warmth of newly baked bread”.
                </p>

                <p data-aos="fade-down" data-aos-duration="1200">
                  - Alain de Botton
                </p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio_filter}>
          {/* END TABLIST */}
          <div className={styles.list_wrapper}>
            <div className={styles.portfolio_list}>
              {photos.map((photo) => (
                <li data-aos="fade-right" data-aos-duration="1200">
                  <div className={styles.inner}>
                    <div className={styles.entry}>
                      <a>
                        <Tooltip
                          css={{
                            color: "black",
                            backgroundColor: "white",
                            marginTop: "200px",
                            borderRadius: "0px",
                          }}
                          color="invert"
                          hideArrow
                          content={photo.alt}
                        >
                          <motion.div
                            transition={{ duration: 2 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <Image
                              className={styles.img}
                              src={photo.src}
                              width={1000}
                              height={1000}
                            />
                          </motion.div>
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

export default House;
