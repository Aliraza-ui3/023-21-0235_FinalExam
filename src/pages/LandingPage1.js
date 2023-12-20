import BlogSection from "../components/BlogSection";
import SectionCard from "../components/SectionCard";
import ContainerWrapper from "../components/ContainerWrapper";
import ContainerFrame from "../components/ContainerFrame";
import FAQContainer from "../components/FAQContainer";
import ElementsButtonsOutline from "../components/ElementsButtonsOutline";
import Footer from "../components/Footer";
import CustomizableDappsTemplateSecti from "../components/CustomizableDappsTemplateSecti";
import CreateCard from "../components/CreateCard";
import styles from "./LandingPage1.module.css";

const LandingPage1 = () => {
  return (
    <div className={styles.landingPage1}>
      <div className={styles.frame}>
        <BlogSection />
        <SectionCard />
        <ContainerWrapper />
        <ContainerFrame />
        <FAQContainer />
        <div className={styles.frame1}>
          <div className={styles.wrapperGroup146Parent}>
            <div className={styles.wrapperGroup146}>
              <img
                className={styles.wrapperGroup146Child}
                alt=""
                src="/group-146@2x.png"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frame2}>
                <div className={styles.frequentlyAskedQuestions}>
                  Start a free trial today
                </div>
                <div className={styles.createScreensDirec}>
                  No credit card required.
                </div>
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
                <div className={styles.buttonText}>Start for free</div>
              </div>
            </div>
          </div>
          <div className={styles.frequentlyAskedQuestions1}>Metaverse</div>
        </div>
        <Footer />
        <div className={styles.frame3}>
          <CustomizableDappsTemplateSecti />
          <CreateCard />
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.landingPage1Child} />
    </div>
  );
};

export default LandingPage1;
