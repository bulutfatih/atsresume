import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSkill} from "../utlis/addSkill";
import SkillLine from "./SkillLine";
import {MdAddCircle} from "react-icons/md";

const SkillsGroup = ({title}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="skill-group flex-col-gap-2">
      <h3 className="skill-group-title">{title}</h3>
      {skillType.skills.map((skill, index) => (
        <SkillLine key={index} skill={skill} title={title} index={index}/>
      ))}
      {/* Add new skill button */}
      <button type="button" onClick={() => addSkill(title, setResumeData)}
              aria-label="Add"
              className="p-2 w-[37px] text-white form-icon-button rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default SkillsGroup;
