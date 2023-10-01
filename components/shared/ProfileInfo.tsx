'use client';
import React from "react";



interface ProfileInfoProps {
  user: {
    email?: string;
  };
  onSignOut: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user, onSignOut }) => {
  return (
    <div>
      <p>Email: {user?.email}</p>
      <button
        onClick={onSignOut}
        className="text-red-500 cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileInfo;
