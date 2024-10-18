import styles from "./page.module.css";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import Carousal from "./Carousal/Carousal";
// import Hero from "./components/Hero/Hero";
import ExpoPage from "./components/expo-page/page";
// import FooterPC from "./footerpc";
import Eventpage from "./components/Event_card/eventpage";

const Page = () => {
  return (
    // <div className="h-[400vh] relative overflow-clip bg-black">
    //     <Hero />
    //     <Carousal />
    //     <ExpoPage />
    //   <div className="footer h-max w-full absolute bottom-0 left-0">
    //     <FooterDesktop />
    //     <FooterMobile />
    //   </div>
    // </div>
    <Eventpage
      event = "WORKSHOPS"
      cards = {[
        'Column 1',
        'Column 2',
        'Column 3',
        'Column 4',
        'Column 5',
        'Column 6',
        'Column 7',
      ]}
    />
  );
};

export default Page;
