import React from "react";
import myImage from "../../photo.jpg";
import "./Styles.css";

const ProfilePhoto = () => {
  return (
    <div className="profilePhoto">
      <img src={myImage} alt="myPhoto" className="profilImage" />
    </div>
  );
};

export default ProfilePhoto;
