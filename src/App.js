import './App.css';
// import AboutMe from './Component/AboutMe';
// import FormSubmission from "./Component/Cantect";
// import ResponsiveAppBar from "./Component/Navbar";
// import Projects from './Component/Project';
// function App() {
//   return (
//     <div className="App">
//       <ResponsiveAppBar />
//       <AboutMe />
//       <FormSubmission />
//       <Projects />

//     </div>
//   );
// }

// export default App;

import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Component/Navbar";
import AboutMe from "./Component/AboutMe";
import FormSubmission from "./Component/Cantect";

import Projects from "./Component/Project";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveAppBar />}>
            <Route index element={<AboutMe />} />
            <Route path="contact" element={< FormSubmission />} />
            <Route path='projects' element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}