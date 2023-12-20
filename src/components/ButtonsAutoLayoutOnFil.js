import { useMemo } from "react";
import styles from "./ButtonsAutoLayoutOnFil.module.css";

const ButtonsAutoLayoutOnFil = ({
  iconsArrowsarrowRight,
  buttonsAutoLayoutOnFilBackgroundColor,
}) => {
  const buttonsAutoLayoutOnFilStyle = useMemo(() => {
    return {
      backgroundColor: buttonsAutoLayoutOnFilBackgroundColor,
    };
  }, [buttonsAutoLayoutOnFilBackgroundColor]);

  return (
    <div
      className={styles.buttonsAutoLayoutOnFil}
      style={buttonsAutoLayoutOnFilStyle}
    >
      <img
        className={styles.iconsarrowsarrowRight}
        alt=""
        src={iconsArrowsarrowRight}
      />
    </div>
  );
};

export default ButtonsAutoLayoutOnFil;
