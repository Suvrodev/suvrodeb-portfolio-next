import AboutMe from "@/components/modules/PublicDashboard/HomePage/AboutMe/AboutMe";
import Banner from "@/components/modules/PublicDashboard/HomePage/Banner/Banner";
import Contact from "@/components/modules/PublicDashboard/HomePage/Contact/Contact";
import Education from "@/components/modules/PublicDashboard/HomePage/Education/Education";
import Experience from "@/components/modules/PublicDashboard/HomePage/Experience/Experience";
import MyService from "@/components/modules/PublicDashboard/HomePage/MyService/MyService/MyService";
import Pricing from "@/components/modules/PublicDashboard/HomePage/Pricing/Pricing";
import Project from "@/components/modules/PublicDashboard/HomePage/Project/Project";
import Skill from "@/components/modules/PublicDashboard/HomePage/Skill/Skill";
import SkillLoading from "@/components/modules/PublicDashboard/HomePage/Skill/SkillLoading/SkillLoading";
import Testimonial from "@/components/modules/PublicDashboard/HomePage/Testimonial/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full overflow-auto" id="home">
      <div>
        <Banner />
      </div>

      <div className=" px-5 md:px-28 py-10 " id="about">
        <AboutMe />
      </div>

      <div className="px-5 md:px-36 py-10 sColor " id="experience">
        <Experience />
      </div>
      <div className="px-5 md:px-36 py-10 " id="service">
        <MyService />
      </div>
      <div className="px-5 md:px-36 py-10 sColor overflow-hidden" id="skill">
        <Skill />
      </div>
      <div className="p-2 md:p-10 sColor flex justify-start md:justify-center ">
        <SkillLoading />
      </div>

      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="project">
        <Project admin={true} />
      </div>

      <div className="px-5 md:px-36 py-10 sColor" id="education">
        <Education />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="testimonial">
        <Testimonial />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="price">
        <Pricing />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="price">
        <Contact />
      </div>

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
