import BugSVG from "/public/icons/bug.svg";

const BugReport = () => {
  return (
    <div className="ml-2 pl-6 border-l border-gray-300 ">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdTj_umu9UGkrO6tPGB13lJGAAaDAF0X--1_GvnFEmFwYuCTg/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-3 py-1.5 group text-sm border border-[#c78d88] rounded-md transition-all duration-300 shadow-cert-navbar over:shadow-lg hover:bg-cert-dark-red hover:border-cert-dark-red"
      >
        <BugSVG
          width={16}
          className="text-cert-dark-red group-hover:text-white"
        />
        <div className="text-cert-dark-red group-hover:text-white ml-4">
          Bug Report
        </div>
      </a>
    </div>
  );
};
export default BugReport;
