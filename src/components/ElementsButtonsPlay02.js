import { useMemo } from "react";
import styles from "./ElementsButtonsPlay02.module.css";

const ElementsButtonsPlay02 = ({
  elementsButtonsPlay02Elem,
  elementsButtonsPlay02Width,
  elementsButtonsPlay02Height,
  elementsButtonsPlay02Position,
}) => {
  const elementsButtonsPlay02Style = useMemo(() => {
    return {
      width: elementsButtonsPlay02Width,
      height: elementsButtonsPlay02Height,
      position: elementsButtonsPlay02Position,
    };
  }, [
    elementsButtonsPlay02Width,
    elementsButtonsPlay02Height,
    elementsButtonsPlay02Position,
  ]);

  return (
    <img
      className={styles.elementsButtonsPlay02}
      alt=""
      src={elementsButtonsPlay02Elem}
      style={elementsButtonsPlay02Style}
    />
  );
};

export default ElementsButtonsPlay02;
