import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import ContactForm from "../ContactUs/ContactForm";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner";
import OurPhones from "./OurPhones";

function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
        <OurPhones></OurPhones>
        <AboutUs></AboutUs>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
