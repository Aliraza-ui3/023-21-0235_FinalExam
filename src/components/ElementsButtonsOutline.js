import { useMemo } from "react";
import styles from "./ElementsButtonsOutline.module.css";

const ElementsButtonsOutline = ({
  buttonText,
  showButtonText,
  elementsButtonsOutlineWidth,
  elementsButtonsOutlineHeight,
  elementsButtonsOutlinePosition,
  baseBorder,
  baseBoxSizing,
  baseBackgroundColor,
  buttonTextTop,
}) => {
  const elementsButtonsOutlineStyle = useMemo(() => {
    return {
      width: elementsButtonsOutlineWidth,
      height: elementsButtonsOutlineHeight,
      position: elementsButtonsOutlinePosition,
    };
  }, [
    elementsButtonsOutlineWidth,
    elementsButtonsOutlineHeight,
    elementsButtonsOutlinePosition,
  ]);

  const base4Style = useMemo(() => {
    return {
      border: baseBorder,
      boxSizing: baseBoxSizing,
      backgroundColor: baseBackgroundColor,
    };
  }, [baseBorder, baseBoxSizing, baseBackgroundColor]);

  const buttonText1Style = useMemo(() => {
    return {
      top: buttonTextTop,
    };
  }, [buttonTextTop]);

  return (
    <div
      className={styles.elementsButtonsOutline}
      style={elementsButtonsOutlineStyle}
    >
      <div className={styles.button}>
        <div className={styles.base} style={base4Style} />
        {showButtonText && (
          <div className={styles.buttonText} style={buttonText1Style}>
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementsButtonsOutline;
