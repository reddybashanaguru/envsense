import Image from "next/image";
import { MdSearch, MdMessage, MdNotifications, MdAccountCircle } from "react-icons/md"; // Material Design Icons

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm h-16">
      {/* SEARCH BAR */}
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-8 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        />
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message Icon */}
        <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all relative">
          <MdMessage size={20} className="text-gray-600" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all shadow-md">
            <MdNotifications size={22} className="text-gray-600" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-indigo-500 text-white rounded-full text-xs font-semibold shadow-md">
            1
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <MdAccountCircle size={36} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
