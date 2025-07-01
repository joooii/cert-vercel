"use client";
import BugSVG from "@/icons/bug.svg";
import LogoSVG from "@/icons/logo-white.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navBarList = [
  { name: "Home", href: "/" },
  { name: "Board", href: "/board" },
  { name: "Schedule", href: "/schedule" },
  { name: "Study", href: "/study" },
  { name: "Blog", href: "/blog" },
  { name: "People", href: "/people" },
  { name: "User", href: "/user" },
];

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md border-b border-gray-200 top-0 z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group ">
              <div className="relative w-10 h-10 mr-2">
                <LogoSVG
                  width={30}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
                <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(158,1,1,0.2)]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-wider drop-shadow-lg transition-colors duration-300">
                  CERT-IS
                </span>
                <span className="text-xs text-gray-600 -mt-1 font-mono transition-colors duration-300">
                  Computer Emergency Response Team <br />
                  Information Security
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center">
          {navBarList.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm mx-0.5 transition-all duration-300 rounded-lg relative group overflow-hidden hover:text-[#9E0101] hover:bg-[rgba(158,1,1,0.05)]
              ${
                pathname === item.href &&
                "text-[#9E0101] bg-[rgba(158,1,1,0.05)] shadow-[0_4px_6px_-1px_rgba(158,1,1,0.1),0_2px_4px_-1px_rgba(158,1,1,0.06)]"
              }
            `}
            >
              <div className="relative z-10">{item.name}</div>
              {pathname === item.href && (
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(158, 1, 1, 0.2), rgba(158, 1, 1, 0.1))",
                  }}
                ></div>
              )}
              <div className="absolute bg-[#9E0101] bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}

          <div className="ml-2 pl-6 border-l border-gray-300 ">
            <button
              className="flex items-center px-3 py-1.5 group text-sm border border-[#c78d88] rounded-md transition-all duration-300 hover:shadow-lg hover:bg-[#9E0101] hover:border-[#9E0101] shadow-[0_4px_6px_-1px_rgba(158,1,1,0.1),0_2px_4px_-1px_rgba(158,1,1,0.06)] "
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdTj_umu9UGkrO6tPGB13lJGAAaDAF0X--1_GvnFEmFwYuCTg/viewform?usp=header",
                  "_blank"
                )
              }
            >
              <BugSVG
                width={16}
                className="text-[#9E0101] group-hover:text-white"
              />
              <div className="text-[#9E0101] group-hover:text-white  ml-4">
                Bug Report
              </div>
            </button>
          </div>
        </div>

        {/* 햄버거 메뉴 추가 예정 */}
        <div className="flex md:hidden">
          <span className="top-0"> </span>
          <span className="top-2"> </span>
          <span className="bottom-0"> </span>
          <div>햄버거</div>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
