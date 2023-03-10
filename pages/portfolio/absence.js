import styles from "@/styles/House.module.css";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const photos = [
  { src: "/assets/absence/oil.png", alt: "0 0 0" },
  { src: "/assets/absence/matches.png", alt: "18 62 1" },
  { src: "/assets/absence/wood.png", alt: "255 108 0" },
];

const ImageLightBox = ({ src }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
    <div className={`${styles.image_container_a} ${
                isOpen ? styles.open : ""
              }`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={styles.shade}
        onClick={() => setOpen(false)}
      />
      <motion.img
        className={styles.img}
        src={src}
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
      />
    </div>
    </div>

  );
};

const Absence = () => {
  return (
    <>
      <div className={styles.tokyo_tm_portfolio}>
        <div className={styles.tokyo_tm_title}>
          <div className={styles.series_title}>
            <div className={styles.absence_title}>
              <h3>
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
                <ImageLightBox src={photo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Absence;
