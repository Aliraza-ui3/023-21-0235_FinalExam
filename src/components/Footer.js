import LogoTextDark from "./LogoTextDark";
import ButtonsAutoLayoutOnFil from "./ButtonsAutoLayoutOnFil";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.frame}>
      <footer className={styles.footer06} id="Footer">
        <img className={styles.baseIcon} alt="" src="/base@2x.png" />
        <LogoTextDark
          logoTextDarkLogoTextDark="/logo--text-dark@2x.png"
          logoTextDarkWidth="112.3px"
          logoTextDarkHeight="32.4px"
          logoTextDarkPosition="absolute"
          logoTextDarkTop="64.8px"
          logoTextDarkLeft="815px"
        />
      </footer>
      <div className={styles.wrapperGroup89}>
        <img
          className={styles.wrapperGroup89Child}
          alt=""
          src="/group-89@2x.png"
        />
      </div>
      <div className={styles.copyright2021Parent}>
        <div className={styles.copyright2021}>Copyright 2022 © Web3makr</div>
        <div className={styles.social}>
          <ButtonsAutoLayoutOnFil
            iconsArrowsarrowRight="/iconssocialsinstagram@2x.png"
            buttonsAutoLayoutOnFilBackgroundColor="unset"
          />
          <ButtonsAutoLayoutOnFil
            iconsArrowsarrowRight="/iconssocialstwitter@2x.png"
            buttonsAutoLayoutOnFilBackgroundColor="unset"
          />
          <ButtonsAutoLayoutOnFil
            iconsArrowsarrowRight="/iconssocialsfacebook@2x.png"
            buttonsAutoLayoutOnFilBackgroundColor="unset"
          />
        </div>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.menu}>
            <div className={styles.about}>Web3Makr</div>
            <div className={styles.workProcess}>White paper</div>
            <div className={styles.workProcess1}>Services</div>
            <div className={styles.services}>Tool</div>
            <div className={styles.contacts}>Contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
