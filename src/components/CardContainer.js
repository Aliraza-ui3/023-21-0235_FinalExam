import { useMemo } from "react";
import ElementsPlaceholderRadiu from "./ElementsPlaceholderRadiu";
import styles from "./CardContainer.module.css";

const CardContainer = ({
  articleTitle,
  contentCategory,
  readingTime,
  imageDimensions,
  ellipseDivHeight,
  minReadHeight,
  baseWidth,
  propWidth,
  propWidth1,
  propHeight,
  propBottom,
  propMarginTop,
}) => {
  const articleStyle = useMemo(() => {
    return {
      height: ellipseDivHeight,
    };
  }, [ellipseDivHeight]);

  const textStyle = useMemo(() => {
    return {
      height: minReadHeight,
    };
  }, [minReadHeight]);

  const createScreensDirectlyContainerStyle = useMemo(() => {
    return {
      width: baseWidth,
    };
  }, [baseWidth]);

  const productStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const minReadStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const elementsPlaceholderRadiu2Style = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
    };
  }, [propHeight, propBottom]);

  const baseIconStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={styles.articleParent}>
      <div className={styles.article} style={articleStyle}>
        <div className={styles.text} style={textStyle}>
          <div className={styles.creativeWaysTo}>{articleTitle}</div>
          <div
            className={styles.createScreensDirectlyContainer}
            style={createScreensDirectlyContainerStyle}
          >
            <p className={styles.createScreensDirectly}>
              Create screens directly in Method or
            </p>
            <p
              className={styles.createScreensDirectly}
            >{`add your imagesfrom Sketch or Figma. `}</p>
          </div>
        </div>
        <div className={styles.tagText}>
          <div className={styles.product} style={productStyle}>
            {contentCategory}
          </div>
          <div className={styles.tagTextChild} />
          <div className={styles.minRead} style={minReadStyle}>
            {readingTime}
          </div>
        </div>
        <ElementsPlaceholderRadiu
          showBase={false}
          elementsPlaceholderRadiuWidth="100%"
          elementsPlaceholderRadiuHeight="59.73%"
          elementsPlaceholderRadiuPosition="absolute"
          elementsPlaceholderRadiuTop="0%"
          elementsPlaceholderRadiuRight="0%"
          elementsPlaceholderRadiuBottom="40.27%"
          elementsPlaceholderRadiuLeft="0%"
        />
      </div>
      <img
        className={styles.baseIcon}
        alt=""
        src={imageDimensions}
        style={baseIconStyle}
      />
    </div>
  );
};

export default CardContainer;
