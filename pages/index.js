import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import OurShaheed from "@/components/OurShaheed/OurShaheed";
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
      <Gallery />
      <NumberCounter />
      <OurShaheed />
    </>
  );
};

export default Home;
