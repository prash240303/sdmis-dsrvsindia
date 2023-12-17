import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

interface SubmenuItem {
  href: string;
  label: string;
}

interface MainMenu {
  icon: string;
  title: string;
  submenus: SubmenuItem[];
}

interface Dashboard {
  dashboardName: string;
  mainMenus: MainMenu[];
}

interface SideNavData {
  dashboards: Dashboard[];
}

const sideNavData: SideNavData = {
  dashboards: [
    {
      dashboardName: "/admin-dashboard",
      mainMenus: [
        {
          title: "Digi Volunteer Card Division",
          icon: "/icons/academiccap.svg",
          submenus: [
            { href: "/admin-dashboard", label: "Manage Digi Volunteer" },
            { href: "/admin-dashboard/users", label: "Volunteer List" },
            { href: "/admin-dashboard/users", label: "Digi Volunteer Card" },
            { href: "/admin-dashboard/users", label: " Digi Volunteer Fees Creation" },
          ],
        },
        {
          title: "Tender / Procurement Fees Division",
          icon: "/icons/academic-cap.svg",

          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Create Tender Type" },
            { href: "/admin-dashboard/settings/security", label: "Create and Manage Tender" },
            { href: "/admin-dashboard/settings/security", label: "Customer Details" },
            { href: "/admin-dashboard/settings/security", label: "Tender Fees Collection Report" },
          ],
        },
        {
          title: "Kids School Affiliation Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Manage Affiliation" },
            { href: "/admin-dashboard/settings/security", label: "Affiliation Fees Update" },
            { href: "/admin-dashboard/settings/security", label: "Kids School Details" },
            { href: "/admin-dashboard/settings/security", label: "Fees Collection Report" },
          ],
        },
        {
          title: "Skill Certificate",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Skill Certificate Type" },
            { href: "/admin-dashboard/settings/security", label: "Fees Collection Report" },
            { href: "/admin-dashboard/settings/security", label: "Issued certificate details " },
            { href: "/admin-dashboard/settings/security", label: " Manage Certificate" },
          ],
        },
        {
          title: "Talent Search / Scholarship Division ",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Scholarship Exam Type" },
            { href: "/admin-dashboard/settings/security", label: "Fees Update" },
            { href: "/admin-dashboard/settings/security", label: "Manage Candidate " },
            { href: "/admin-dashboard/settings/security", label: " Fees Collection Report" },
            { href: "/admin-dashboard/settings/security", label: " Candidate Report" },
          ],
        },
        {
          title: "Donation Division ",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Donation Type" },
            { href: "/admin-dashboard/settings/security", label: "Doner Details" },
            { href: "/admin-dashboard/settings/security", label: "Manage Candidate " },
            { href: "/admin-dashboard/settings/security", label: "Donation Collection Report" },
          ],
        },
        {
          title: "Manage Frontend ",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Page Updates" },
            { href: "/admin-dashboard/settings/security", label: "Slider Updates" },
          ],
        },
        {
          title: "Profile ",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "My Profile" },
            { href: "/admin-dashboard/settings/security", label: "Change Password" },
            { href: "/admin-dashboard/settings/security", label: "Two factor Auth" },
          ],
        },
        {
          title: "Human Resource Management ",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Manage Designation" },
            { href: "/admin-dashboard/settings/security", label: "Manage Employee" },
          ],
        },
        {
          title: "Administrator",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "General Setting" },
            { href: "/admin-dashboard/settings/security", label: "Add Direct Branch / Study Centre" },
            { href: "/admin-dashboard/settings/security", label: "Manage Direct Branch / Study Centre" },
            { href: "/admin-dashboard/settings/security", label: "Manage Emitra Centre" },
            { href: "/admin-dashboard/settings/security", label: "Manage CSC Centre" },
            { href: "/admin-dashboard/settings/security", label: "Approve New Study Centre" },
            { href: "/admin-dashboard/settings/security", label: "Office / Centre List" },
            { href: "/admin-dashboard/settings/security", label: "Payment Setting" },
            { href: "/admin-dashboard/settings/security", label: "Study Centre Wallet Management" },
            { href: "/admin-dashboard/settings/security", label: "SMS and Email Integration" },
            { href: "/admin-dashboard/settings/security", label: "Academic Year / Financial Year" },
            { href: "/admin-dashboard/settings/security", label: "User Role" },
            { href: "/admin-dashboard/settings/security", label: "Role Permission" },
            { href: "/admin-dashboard/settings/security", label: "Manage Admin Profile" },
            { href: "/admin-dashboard/settings/security", label: "Manage User" },
            { href: "/admin-dashboard/settings/security", label: "Reset User Password" },
            { href: "/admin-dashboard/settings/security", label: "Activity Logs" },
            { href: "/admin-dashboard/settings/security", label: "Backup Database" },
            { href: "/admin-dashboard/settings/security", label: "Digilocker Integration" },
          ],
        },
        {
          title: "Academic Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/admin-dashboard/settings/general", label: "Create and Update Course" },
            { href: "/admin-dashboard/settings/security", label: "Manage Course Subject" },
            { href: "/admin-dashboard/settings/security", label: "Manage Syllabus" },
            { href: "/admin-dashboard/settings/security", label: "Manage Study Materials" },
            { href: "/admin-dashboard/settings/security", label: "Create Assignment" },
            { href: "/admin-dashboard/settings/security", label: "Assignment Submission" },
            { href: "/admin-dashboard/settings/security", label: "Manage Student" },
            { href: "/admin-dashboard/settings/security", label: "Online Exam / Assessment" },
            { href: "/admin-dashboard/settings/security", label: "Manage Exam" },
            { href: "/admin-dashboard/settings/security", label: "Manage Exam Marks" },
            { href: "/admin-dashboard/settings/security", label: "Manage Exam Admit Card" },
            { href: "/admin-dashboard/settings/security", label: "Mail and SMS" },
            { href: "/admin-dashboard/settings/security", label: "Complaint and Suggestion" },
            { href: "/admin-dashboard/settings/security", label: "Announcement" },
            { href: "/admin-dashboard/settings/security", label: "MIS Report" },
          ],
        },
      ],
    },
    {
      dashboardName: "/student-dashboard",
      mainMenus: [
        {
          title: "Dashboard",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/student-dashboard/courses", label: "Dashboard" },
          ],
        },
        {
          title: "Student ID Card",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/student-dashboard/grades", label: "Student ID Card" },
          ],
        },
        {
          title: "Read Course",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/student-dashboard/grades", label: "Read Course" },
          ],
        },
        {
          title: "Course Syllabus",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/student-dashboard/grades", label: "Course Syllabus" },
          ],
        },
        {
          title: "Track Application",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/student-dashboard/grades", label: "Track Application" },
          ],
        },
      ],
    },
    {
      dashboardName: "/studycenter-dashboard",
      mainMenus: [
        {
          title: "Profile Management",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/centers", label: "Update Profile" },
            { href: "/studycenter-dashboard/manage", label: "Change Password" },
          ],
        },
        {
          title: "Wallet / Payment Gateway",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Add Amount" },
            { href: "/studycenter-dashboard/create", label: "Amount Details" },
          ],
        },
        {
          title: "Academic Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Student Admission" },
            { href: "/studycenter-dashboard/create", label: "Manage Student" },
            { href: "/studycenter-dashboard/create", label: "Student List" },
            { href: "/studycenter-dashboard/create", label: "Student ID Card" },
            { href: "/studycenter-dashboard/create", label: "Exam Result" },
            { href: "/studycenter-dashboard/create", label: "Download Affiliation" },
            { href: "/studycenter-dashboard/create", label: "Online Examination / Assessment Submission" },
          ],
        },
        {
          title: "Teacher / Staff Details",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Add Faculty" },
            { href: "/studycenter-dashboard/create", label: "Manage Faculty" },
          ],
        },
        {
          title: "Complaint and Suggestion",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Add Complaint / Suggestion" },
            { href: "/studycenter-dashboard/create", label: "Status" },
          ],
        },
        {
          title: "Digi Volunteer Card Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Volunteer Apply" },
            { href: "/studycenter-dashboard/create", label: "Status" },
            { href: "/studycenter-dashboard/create", label: "Volunteer List" },
            { href: "/studycenter-dashboard/create", label: "Print Volunteer Card" },
          ],
        },
        {
          title: "Tender / Procurement Fees Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Tender Fees Payment" },
            { href: "/studycenter-dashboard/create", label: "Status" },
            { href: "/studycenter-dashboard/create", label: "Tender Application List" },
            { href: "/studycenter-dashboard/create", label: "Print Receipt" },
          ],
        },
        {
          title: "Skill Certificate Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Apply For Certificate" },
            { href: "/studycenter-dashboard/create", label: "Applicant List" },
            { href: "/studycenter-dashboard/create", label: "Print Certificate" },
          ],
        },
        {
          title: "Talent Search / Scholarship Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Apply For Scholarship" },
            { href: "/studycenter-dashboard/create", label: "Manage Application" },
            { href: "/studycenter-dashboard/create", label: "Application List" },
          ],
        },
        {
          title: "Donation Division",
          icon: "/icons/academic-cap.svg",
          submenus: [
            { href: "/studycenter-dashboard/courses", label: "Donation Payment" },
            { href: "/studycenter-dashboard/create", label: "Track Status" },
            { href: "/studycenter-dashboard/create", label: "Print Donation Receipt" },
          ],
        },
      ],
    },
  ],
};


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // Function to get current dashboard data based on the pathname
  const getCurrentDashboardData = (pathname: string): Dashboard | undefined => {
    const currentDashboard = sideNavData.dashboards.find(
      (dashboard) => dashboard.dashboardName === pathname
    );

    return currentDashboard;
  };

  // Example usage:
  const currentDashboardData = getCurrentDashboardData(pathname);

  if (currentDashboardData) {
    console.log(`Current Dashboard: ${currentDashboardData.dashboardName}`);
    console.log("Main Menus:");

    currentDashboardData.mainMenus.forEach((mainMenu) => {
      console.log(`- ${mainMenu.title}`);
      console.log("  Submenus:");
      mainMenu.submenus.forEach((submenu) => {
        console.log(`  - ${submenu.label}`);
      });
    });
  } else {
    console.log("Dashboard not found for the given pathname");
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-sdmis-primary-600 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <div className="flex w-full gap-2 justify-center items-center">
            <Image
              width={48}
              height={48}
              className="bg-white rounded-sm"
              src={"/images/logo.png"}
              alt="Logo"
            />
            <h1 className="md:text-sm text-xs text-white">Institute of Digital Education & Employment Development</h1>
          </div>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4 px-4 lg:px-6">

          {currentDashboardData && (
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
                MENU
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                {currentDashboardData.mainMenus.map((mainMenu, key) => (
                  <SidebarLinkGroup
                    key={key}
                    activeCondition={
                      pathname === "/" || pathname.includes("dashboard")
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment key={key}>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-sdmis-primary-300 ${open ? "bg-sdmis-primary-200 text-black" : "text-white"} ${(pathname === "/" ||
                              pathname.includes("dashboard"))
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <Image src="/public/images/next.svg" alt="icon" width={20} height={20} className="border border-white text-white" />
                            {mainMenu.title}
                            <svg
                              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"
                                }`}
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                fill=""
                              />
                            </svg>
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${!open && "hidden"
                              }`}
                          >
                            <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                              {
                                mainMenu.submenus.map((submenu, key) => (
                                  <li key={key}>
                                    <Link
                                      href="/admin-dashboard"
                                      className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-sdmis-primary-100 ${pathname === "/" && "text-white"
                                        } `}
                                    >
                                      {submenu.label}
                                    </Link>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                ))}
              </ul>
            </div>
          )}

        </nav>

        {/* <!-- Sidebar Menu --> */}
      </div >
    </aside >
  );
};

export default Sidebar;
