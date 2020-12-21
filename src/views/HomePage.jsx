import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default HomePage;
export { default as HomePage } from "./HomePage";
