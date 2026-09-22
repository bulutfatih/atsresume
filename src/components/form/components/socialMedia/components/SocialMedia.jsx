import React, {useContext} from 'react';
import {handleSocialMedia} from "../units/handleSocialMedia";
import {ResumeContext} from "../../../../builder";
import {removeLanguage} from "../../languages/utils/removeLanguage";
import {BsTrash3} from "react-icons/bs";
import {removeSocialMedia} from "../units/removeSocialMedia";

const SocialMedia = ({socialMedia, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  return (
    <div className="entry-card flex gap-3 items-start">
      <div
        className="flex-1 min-w-0 flex-wrap-gap-2"
      >
        <input
          type="text"
          placeholder="Social Media"
          name="socialMedia"
          className="w-full mb-0 other-input"
          value={socialMedia.socialMedia}
          onChange={(e) => handleSocialMedia(resumeData, setResumeData, e, index)}
        />
        <input
          type="text"
          placeholder="Link"
          name="link"
          className="w-full mb-0 other-input"
          value={socialMedia.link}
          onChange={(e) => handleSocialMedia(resumeData, setResumeData, e, index)}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          removeSocialMedia(resumeData, setResumeData, index)
        }}
        aria-label="Remove"
        className="p-2 text-white h-fit form-icon-button rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default SocialMedia;
