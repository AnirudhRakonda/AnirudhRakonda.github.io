import React from 'react';
import img from '../assets/img.jpg';

const Profile = () => {
  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center ">
      <img
        src={img}
        alt="Profile"
        className="w-full h-full object-cover rounded-[14px]"
      />
    </div>
  );
};

export default Profile;
