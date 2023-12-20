import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./CreateCard.module.css";

const CreateCard = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-89@2x.png" />
          <img className={styles.frameItem} alt="" src="/group-89@2x.png" />
          <div className={styles.youCanEvenSyncDeParent}>
            <div className={styles.youCanEven}>
              Most entrepreneurs want to create their own web3 sites,
              unfortunately, they dont know much about creating one. Web3Makr
              makes it easier for newbies to create a blockchain-based
              collectibles solution without the hassle of leaving their favorite
              creation tools and by simple drag and drop functionality.
            </div>
            <div className={styles.buildingBetterWorkContainer}>
              <p className={styles.create}>Create</p>
              <p className={styles.create}>{`your own Web3 Masterpiece `}</p>
            </div>
            <div className={styles.elementsButtonsOutlineParent}>
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="182.7px"
                elementsButtonsOutlineHeight="49.8px"
                elementsButtonsOutlinePosition="relative"
                baseBorder="unset"
                baseBoxSizing="unset"
                baseBackgroundColor="1px solid #6f348e"
                buttonTextTop="27.51%"
              />
              <div className={styles.buttonText}>Start building</div>
            </div>
          </div>
        </div>
        <img className={styles.frameInner} alt="" src="/rectangle-51@2x.png" />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-63@2x.png"
        />
        <img className={styles.frameChild1} alt="" src="/rectangle-66@2x.png" />
        <img className={styles.frameChild2} alt="" src="/rectangle-67@2x.png" />
        <img className={styles.frameChild3} alt="" src="/rectangle-68@2x.png" />
        <img className={styles.frameChild4} alt="" src="/rectangle-69@2x.png" />
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
      </div>
    </div>
  );
};

export default CreateCard;
