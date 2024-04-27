import React from "react";

const Profile = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-600"></div>
        <div className="ml-4">
          <div className="text-lg font-semibold">John Doe</div>
          <div className="text-sm text-gray-600">Admin</div>
        </div>
      </div>
      <ul>
        <li>Settings</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Profile;
