import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/HomePage/Home";
import ReadMore from "./Pages/ReadMorePage/ReadMore";
import OJTExperience from "./Pages/MyExperiencePage/OJTExperience";
import Contact from "./Pages/ContactPage/Contact";
import NotFound from "./Pages/NotFoundPage/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read-more" element={<ReadMore />} />
          <Route path="/ojt-experience" element={<OJTExperience/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
