import { useState } from "react";
import Link from "next/link";
import {
  MdOutlineDashboard,
  MdLocationOn,
  MdDevicesOther,
  MdOutlineWarning,
  MdReport,
  MdSettings,
  MdSupport,
  MdLogout,
  MdExpandMore,
  MdExpandLess,
  MdSensors,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string | null) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "Overview", icon: <MdOutlineDashboard />, link: "/" },
    {
      title: "Monitoring Points",
      icon: <MdLocationOn />,
      subItems: [
        { title: "Locations", link: "/locations" },
        { title: "Floor Plans", link: "/floor-plans" },
        { title: "Equipment", link: "/equipment" },
        { title: "Data Loggers", link: "/data-loggers" },
        { title: "Channels", link: "/channels" },
      ],
    },
    {
      title: "Alerts",
      icon: <MdOutlineWarning />,
      subItems: [
        { title: "Overview", link: "/alerts-overview" },
        { title: "Excursions", link: "/excursions" },
        { title: "Warnings", link: "/warnings" },
        { title: "Notifications", link: "/notifications" },
      ],
    },
    { title: "Reports", icon: <MdReport />, link: "/reports" },
    {
      title: "Calibration",
      icon: <MdSensors />,
      subItems: [{ title: "Certificates", link: "/certificates" }],
    },
    { title: "Audit Trail", icon: <MdDevicesOther />, link: "/audit-trail" },
    {
      title: "Settings",
      icon: <MdSettings />,
      subItems: [
        { title: "My Profile", link: "/profile" },
        { title: "Account", link: "/account" },
        { title: "Users & Contacts", link: "/users-contacts" },
        { title: "Locations", link: "/settings-locations" },
        { title: "Data Loggers", link: "/settings-data-loggers" },
        { title: "Sensors", link: "/sensors" },
        { title: "Gateways", link: "/gateways" },
        { title: "Unassigned Data Loggers", link: "/unassigned-data-loggers" },
        { title: "Alarm Templates", link: "/alarm-templates" },
        { title: "Notification Policies", link: "/notification-policies" },
        { title: "Integrations", link: "/integrations" },
        { title: "Exports", link: "/exports" },
        { title: "Uploads", link: "/uploads" },
        { title: "API Keys", link: "/api-keys" },
        { title: "Billing", link: "/billing" },
      ],
    },
    {
      title: "Support",
      icon: <MdSupport />,
      subItems: [
        { title: "Email Us", link: "/email-us" },
        { title: "Help Center", link: "/help-center" },
        { title: "Release Notes", link: "/release-notes" },
        { title: "System Status", link: "/system-status" },
        { title: "Terms of Service", link: "/terms" },
        { title: "Privacy Policy", link: "/privacy" },
        { title: "Data Processing Agreement", link: "/data-processing" },
        { title: "Security Overview", link: "/security-overview" },
        { title: "GDPR", link: "/gdpr" },
        { title: "Cookie Policy", link: "/cookie-policy" },
        { title: "Contact Us", link: "/contact-us" },
      ],
    },
    { title: "Logout", icon: <MdLogout />, link: "/logout" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-white text-black flex justify-between items-center p-4 shadow-md h-16">
        <h1 className="text-2xl font-semibold">EnvSense</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative bg-white text-gray-800 w-full max-w-xs lg:max-w-[250px] h-full z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="text-2xl font-semibold p-4 bg-gray-100">EnvSense</div>
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index}>
              {/* Top-level menu items */}
              {!item.subItems && (
                <Link href={item.link || "#"}>
                  <div className="flex items-center p-4 hover:bg-indigo-100 cursor-pointer rounded-md transition-colors">
                    {item.icon}
                    <span className="ml-4 font-medium text-sm">{item.title}</span>
                  </div>
                </Link>
              )}
              {/* Sub-menu with collapsible items */}
              {item.subItems && (
                <div>
                  <div
                    className={`flex items-center justify-between p-4 hover:bg-indigo-100 cursor-pointer rounded-md transition-colors ${
                      activeMenu === item.title && "bg-indigo-200"
                    }`}
                    onClick={() => toggleMenu(item.title)}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-4 font-medium text-sm">{item.title}</span>
                    </div>
                    {activeMenu === item.title ? <MdExpandLess /> : <MdExpandMore />}
                  </div>
                  {/* Sub-items with scrolling */}
                  {activeMenu === item.title && (
                    <div
                      className="bg-indigo-50 pl-6 py-2 space-y-1 max-h-96 overflow-y-auto"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.link}>
                          <div className="block py-2 px-4 hover:bg-indigo-300 text-sm font-medium rounded-md">
                            {subItem.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
