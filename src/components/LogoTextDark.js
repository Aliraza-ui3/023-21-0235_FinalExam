import { useMemo } from "react";
import styles from "./LogoTextDark.module.css";

const LogoTextDark = ({
  logoTextDarkLogoTextDark,
  logoTextDarkWidth,
  logoTextDarkHeight,
  logoTextDarkPosition,
  logoTextDarkTop,
  logoTextDarkLeft,
}) => {
  const logoTextDarkStyle = useMemo(() => {
    return {
      width: logoTextDarkWidth,
      height: logoTextDarkHeight,
      position: logoTextDarkPosition,
      top: logoTextDarkTop,
      left: logoTextDarkLeft,
    };
  }, [
    logoTextDarkWidth,
    logoTextDarkHeight,
    logoTextDarkPosition,
    logoTextDarkTop,
    logoTextDarkLeft,
  ]);

  return (
    <img
      className={styles.logoTextDark}
      alt=""
      src={logoTextDarkLogoTextDark}
      style={logoTextDarkStyle}
    />
  );
};

export default LogoTextDark;
