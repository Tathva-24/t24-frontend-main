import styles from "./page.module.css";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import Carousal from "./Carousal/Carousal";
import Hero from "./components/Hero/Hero";
import ExpoPage from "./components/expo-page/page";
import TeamCard from "./components/team_card/TeamCard";
// import FooterPC from "./footerpc";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <TeamCard />
    </div>
  );
};

export default Page;
