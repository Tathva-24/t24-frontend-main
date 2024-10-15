import styles from "./page.module.css";
import FooterMobile from './components/FooterMobile/FooterMobile';
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import PrizesWorthBox from "./components/PrizesBox/PrizesWorthBox";
// import FooterPC from "./footerpc";
const prop = {
  date : "28/29 Oct",
  venue : "Football Ground"
}
const Page = () => {
  return (
    <PrizesWorthBox {...prop}/>
    /* <div className="h-[200vh] relative">
      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
   </div> */
  );
};

export default Page;