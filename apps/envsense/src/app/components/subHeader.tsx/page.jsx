
'use client';
import { useState } from "react";
import Link from "next/link";
import { MdExpandMore, MdExpandLess, MdAdd  } from "react-icons/md";
const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" flex text-white font-sans font-bold ring-4 text-sm bg-indigo-500 border rounded-md p-2 items-center shadow-lg "
          type="button"
        >
          Dashboard: EnvSense Default

          {!isOpen && <MdExpandMore size={20} />}
          {isOpen && <MdExpandLess size={20} />}

        </button>

        {/* <!-- Dropdown menu --> */}
        {isOpen && <div 
          id="dropdown"
          className="w-60 z-auto bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 absolute"
        >
          <ul
            className=" w-60 py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>}
      </div>
        
       <div className="flex gap-3">
          <div className="">
            <Link href="/addHardwareDevice" className="flex text-white gap-1 font-sans font-bold ring-4 text-sm bg-indigo-500 border rounded-md p-2 items-center shadow-lg ">
              <MdAdd size={22} />
              Add Hardware</Link>
          </div>
          <div className="">
            <button className="flex text-white gap-1 font-sans font-bold ring-4 text-sm bg-indigo-500 border rounded-md p-2 items-center shadow-lg ">
              <MdAdd size={22}/>
              Create Custom Dashboard</button>
          </div>
        </div> 

    </div>
  );
};

export default SubHeader;
