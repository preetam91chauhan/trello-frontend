const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-lg font-semibold">Admin Dashboard</div>
      <div className="flex items-center">
        {/* Profile image */}
        <div className="h-8 w-8 rounded-full bg-gray-600"></div>
        {/* Profile dropdown */}
        <div className="ml-2">
          <div>John Doe</div>
          <div className="text-sm text-gray-400">Admin</div>
        </div>
        {/* Dropdown button */}
        {/* You can replace this button with an icon or image for the dropdown */}
        <button className="ml-2 text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Header;
