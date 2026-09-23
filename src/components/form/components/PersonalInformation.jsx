import React, {useContext, useRef, useState} from "react";
import Image from "next/image";
import {BsTrash3} from "react-icons/bs";
import {MdAddAPhoto} from "react-icons/md";
import {ResumeContext} from "../../builder";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const profilePhotoInput = useRef(null);

  const handlePhotoDrop = (event) => {
    event.preventDefault();
    setIsDraggingPhoto(false);

    const file = event.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) {
      handleProfilePicture(file);
    }
  };

  const removeProfilePhoto = () => {
    setResumeData((currentData) => ({...currentData, profilePicture: ""}));
    if (profilePhotoInput.current) {
      profilePhotoInput.current.value = "";
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Contact Information"
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <div
          className={`profile-photo-field${isDraggingPhoto ? " is-dragging" : ""}`}
          onDragEnter={(event) => {
            event.preventDefault();
            setIsDraggingPhoto(true);
          }}
          onDragOver={(event) => event.preventDefault()}
          onDragLeave={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsDraggingPhoto(false);
            }
          }}
          onDrop={handlePhotoDrop}
        >
          <div className="profile-photo-copy">
            <span className="profile-photo-title">Profile photo</span>
            <span id="profile-photo-help" className="profile-photo-help">
              Shown at the top of your resume. JPG or PNG recommended.
            </span>
          </div>
          <input
            ref={profilePhotoInput}
            id="profile-photo"
            type="file"
            name="profileImage"
            accept="image/png,image/jpeg,image/webp"
            className="sr-only"
            onChange={handleProfilePicture}
            aria-describedby="profile-photo-help"
          />
          <div className="profile-photo-actions">
            <label htmlFor="profile-photo" className="profile-photo-button">
              {resumeData.profilePicture ? (
                <span className="profile-photo-preview">
                  <Image
                    src={resumeData.profilePicture}
                    alt="Your selected profile photo"
                    width={40}
                    height={40}
                  />
                </span>
              ) : (
                <MdAddAPhoto aria-hidden="true" className="profile-photo-icon"/>
              )}
              <span>{resumeData.profilePicture ? "Change profile photo" : "Upload profile photo"}</span>
            </label>
            {resumeData.profilePicture && (
              <button
                type="button"
                className="profile-photo-remove"
                onClick={removeProfilePhoto}
                aria-label="Remove profile photo"
              >
                <BsTrash3 aria-hidden="true"/>
                <span>Remove</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
