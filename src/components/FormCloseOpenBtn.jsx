import React from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCloseOpenBtn = ({ formClose, setFormClose }) => {
  const label = formClose ? "Show editor" : "Hide editor";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="exclude-print resume-floating-action resume-editor-toggle"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose
        ? <BsFillArrowRightCircleFill className="resume-floating-action-icon" aria-hidden="true" />
        : <BsFillArrowLeftCircleFill className="resume-floating-action-icon" aria-hidden="true" />}
      <span>{label}</span>
    </button>
  )
}

export default FormCloseOpenBtn;
