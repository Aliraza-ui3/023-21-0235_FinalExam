import CardContainer from "./CardContainer";
import ElementsPlaceholderRadiu from "./ElementsPlaceholderRadiu";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <div className={styles.backgroundParent}>
      <div className={styles.background} />
      <div className={styles.background1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.ourBlog}>Our blog</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <CardContainer
            articleTitle="6 Creative Ways to Use Repeat Grids in Adobe XD"
            contentCategory="Product"
            readingTime="10 min read"
            imageDimensions="/base@2x.png"
            ellipseDivHeight="520.7px"
            minReadHeight="164px"
            baseWidth="364px"
            propWidth="50px"
            propWidth1="75px"
            propHeight="59.73%"
            propBottom="40.27%"
            propMarginTop="-520px"
          />
          <div className={styles.articleParent}>
            <div className={styles.article}>
              <div className={styles.text}>
                <div className={styles.analyticsFeaturesToContainer}>
                  <p
                    className={styles.analyticsFeatures}
                  >{`Analytics Features `}</p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`to Improve User Experience      `}</p>
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.design}>Design</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead}>6 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="65.79%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="34.21%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon} alt="" src="/base@2x.png" />
          </div>
          <div className={styles.articleParent}>
            <div className={styles.article}>
              <div className={styles.text1}>
                <div className={styles.theDesignSide}>
                  The Design Side Of Conversion Rate Optimization
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.marketing}>Marketing</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead}>9 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="65.79%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="34.21%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
          </div>
          <CardContainer
            articleTitle="The Design Side Of Conversion Rate Optimization"
            contentCategory="Marketing"
            readingTime="9 min read"
            imageDimensions="/base@2x.png"
            ellipseDivHeight="472.7px"
            minReadHeight="116px"
            baseWidth="369px"
            propWidth="64px"
            propWidth1="68px"
            propHeight="65.79%"
            propBottom="34.21%"
            propMarginTop="-472px"
          />
        </div>
        <div className={styles.createScreensDirectlyContainer}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
        <div className={styles.createScreensDirectlyContainer1}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
