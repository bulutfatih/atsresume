import { FaCloudUploadAlt, FaCloudDownloadAlt, FaGithub } from "react-icons/fa";
import React, { useContext } from "react";
import {ResumeContext} from "../../builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // load backup resume data
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = JSON.parse(event.target.result);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="form-toolbar">
      <div>
        <p className="form-eyebrow">RESUME BUILDER</p>
        <h1 className="form-heading">Your details</h1>
        <p className="form-subheading">Fill in the sections below to shape your resume.</p>
      </div>
      <a
        aria-label="View ATSResume on GitHub"
        className="project-repo-link"
        href="https://github.com/bulutfatih/atsresume"
        target="_blank"
        rel="noopener noreferrer"
        title="View the project on GitHub"
      >
        <FaGithub aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <div className="form-data-actions">
        <label className="data-action cursor-pointer">
          <FaCloudUploadAlt aria-hidden="true" />
          <span>Load data</span>
          <input
            aria-label="Load Data"
            type="file"
            className="sr-only"
            onChange={handleLoad}
            accept=".json"
          />
        </label>
        <button
          aria-label="Save Data"
          type="button"
          className="data-action"
          onClick={(event) =>
            handleDownload(
              resumeData,
              resumeData.name + " by ATSResume.json",
              event
            )
          }
        >
          <FaCloudDownloadAlt aria-hidden="true" />
          <span>Save data</span>
        </button>
      </div>
    </div>
  );
};

export default LoadUnload;
