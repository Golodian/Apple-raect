import { useState } from "react";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Alert from "./components/Alert/Alert.jsx"
import SectionOne from "./components/SectionOne/SectionOne.jsx";
import SectionTwo from "./components/SectionTwo/SectionTwo.jsx";
import SectionThree from "./components/SectionThree/SectionThree.jsx";
import SectionFourth from "./components/SectionFourth/SectionFourth.jsx";
import SectionFifth from "./components/SectionFifth/SectionFifth.jsx";
import SectionSixth from "./components/SectionSixth/SectionSixth.jsx";
import YoutubeVideo from "../../Component/YoutubeVideos/YoutubeVideo.jsx";
function App() {
  

  return (
    <>
      <Header />
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFourth />
      <SectionFifth />
      <SectionSixth />
      <YoutubeVideo/>
      <Footer />
    </>
  );
}

export default App;
