import ElementsButtonsPlay02 from "./ElementsButtonsPlay02";
import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./SectionCard.module.css";

const SectionCard = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img className={styles.icon} alt="" src="/30-1@2x.png" />
      <img className={styles.icon1} alt="" src="/27-1@2x.png" />
      <div className={styles.wrapperGroup89Parent}>
        <div className={styles.wrapperGroup89}>
          <img
            className={styles.wrapperGroup89Child}
            alt=""
            src="/group-89@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.welcomeToTheDevelParent}>
            <div className={styles.welcomeToTheContainer}>
              <span>Web</span>
              <span className={styles.makr}>3Makr</span>
              <span> Redefining How You Create</span>
            </div>
            <div className={styles.createScreensDirec}>
              Unlock the blockchain potential to create Web3 Applications
            </div>
          </div>
          <ElementsButtonsPlay02
            elementsButtonsPlay02Elem="/elements--buttons--play-02@2x.png"
            elementsButtonsPlay02Width="82.9px"
            elementsButtonsPlay02Height="83.6px"
            elementsButtonsPlay02Position="relative"
          />
        </div>
      </div>
      <div className={styles.wrapperMockup}>
        <img className={styles.mockupIcon} alt="" src="/mockup@2x.png" />
      </div>
      <nav className={styles.frameWrapper} id="NavBar">
        <div className={styles.frameGroup}>
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
          <div className={styles.elementsButtonsOutlineParent}>
            <ElementsButtonsOutline
              buttonText="Download Now"
              showButtonText={false}
              elementsButtonsOutlineWidth="182.7px"
              elementsButtonsOutlineHeight="49.8px"
              elementsButtonsOutlinePosition="relative"
              baseBorder="1px solid var(--color-darkslateblue-100)"
              baseBoxSizing="border-box"
              baseBackgroundColor="unset"
              buttonTextTop="27.51%"
            />
            <div className={styles.elementsButtonsOutlineGroup}>
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="182.7px"
                elementsButtonsOutlineHeight="49.8px"
                elementsButtonsOutlinePosition="relative"
                baseBorder="1px solid var(--color-deepskyblue)"
                baseBoxSizing="border-box"
                baseBackgroundColor="unset"
                buttonTextTop="27.51%"
              />
              <div className={styles.buttonText}>Start for free</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SectionCard;
