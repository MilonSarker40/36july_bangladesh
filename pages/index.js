import AboutUs from "@/components/AboutUs/AboutUs";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import JulyGallery from "@/components/JulyGallery/JulyGallery";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import OurShaheed from "@/components/OurShaheed/OurShaheed";
import ShaheedKobita from "@/components/ShaheedKobita/ShaheedKobita";
import Slider from "@/components/Slider/Slider";
// import { useRouter } from 'next/router';

const Home = () => {
  // const { locale } = useRouter();
  // const content = {
  //   en: { title: 'Welcome to Next.js!', description: 'This is a multilingual website.' },
  //   bn: { title: 'নেক্সট.জেএস এ স্বাগতম!', description: 'এটি একটি বহুভাষিক ওয়েবসাইট।' },
  // };

  return (
    <>
      <Header />
      <Slider />
      <AboutUs />
      <ShaheedKobita />
      <Gallery />
      <NumberCounter />
      <OurShaheed />
      <JulyGallery />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
