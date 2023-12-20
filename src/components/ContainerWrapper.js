import styles from "./ContainerWrapper.module.css";

const ContainerWrapper = () => {
  return (
    <div className={styles.frame}>
      <img className={styles.frameChild} alt="" src="/group-151@2x.png" />
      <img className={styles.frameItem} alt="" src="/group-156@2x.png" />
      <img className={styles.frameInner} alt="" src="/group-155@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-164@2x.png" />
      <img className={styles.frameChild1} alt="" src="/group-152@2x.png" />
      <div className={styles.aaveLogoWrapper}>
        <img className={styles.aaveLogoIcon} alt="" src="/aavelogo@2x.png" />
      </div>
      <img className={styles.frameChild2} alt="" src="/group-154@2x.png" />
    </div>
  );
};

export default ContainerWrapper;
