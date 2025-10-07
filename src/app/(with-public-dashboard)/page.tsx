import AboutMe from "@/components/modules/PublicDashboard/HomePage/AboutMe/AboutMe";
import Banner from "@/components/modules/PublicDashboard/HomePage/Banner/Banner";
import Experience from "@/components/modules/PublicDashboard/HomePage/Experience/Experience";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full overflow-auto" id="banner">
      <div>
        <Banner />
      </div>

      <div className=" px-5 md:px-36 py-10 " id="">
        <AboutMe />
      </div>

      <div className="px-5 md:px-36 py-10 sColor " id="experience">
        <Experience />
      </div>
      {/* <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="service">
        <MyService />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="skill">
        <Skill />
      </div>
      <div className="p-2 md:p-10 sColor flex justify-start md:justify-center ">
        <SkillLoading />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="project">
        <Project />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="education">
        <Education />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="testimonial">
        <Testimonial />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="price">
        <Pricing />
      </div> */}

      {/* <div
        className="px-5 md:px-36 py-10 overflow-hidden aboutmeBgColor"
        id="blog"
      >
        <Blogs />
      </div> */}

      {/* <div>
        <Footer />
      </div> */}
      {/* <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="testimonial">
        <TextEditor />
      </div> */}
    </div>
  );
};

export default HomePage;
