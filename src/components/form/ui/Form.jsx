import React from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";

const Form = () => {
  return (
    <form className="resume-form exclude-print md:w-[40%] md:h-screen md:overflow-y-auto">
      <LoadUnload/>
      <section className="form-section section-personal"><PersonalInformation/></section>
      <section className="form-section section-social"><SocialMedias/></section>
      <section className="form-section section-summary"><Summary/></section>
      <section className="form-section section-education"><Educations/></section>
      <section className="form-section section-experience"><WorkExperiences/></section>
      <section className="form-section section-projects"><Projects/></section>
      <section className="form-section section-skills">
        <h2 className="input-title">Skills</h2>
        <Skills/>
      </section>
      <section className="form-section section-languages"><Languages/></section>
      <section className="form-section section-certifications"><TestsAndCertifications/></section>
    </form>
  );
};

export default Form;
