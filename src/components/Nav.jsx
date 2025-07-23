import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
  const gsap = useGSAP();
  const searchRef = useRef();
  const [hover, setHover] = useState(false);
  const [isHover, setIsHover] = useState(false);

    useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const navbar = document.querySelector(".nav");
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop) {
        navbar.style.opacity = "0"; 
      } else {
        navbar.style.opacity = "1"; // Show navbar
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    // 🧹 Clean up listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="nav fixed top-0 left-0 w-full transition-all duration-400 z-50 select-none flex p-2 items-center justify-between bg-[#ffde17] ">
        <div className="w-40"></div>
        <a
          className="text-[.8rem] font-[Subtil_Grotesk] text-[#3B0017] underline "
          href=""
        >
          GET 35% OFF ON ALL PRODUCTS 🥳, HURRY UP
        </a>
        <div className="flex  gap-5 mr-10 justify-end font-[obvisouly] text-[#3B0017] ">
          <div
            useRef={searchRef}
            className="search flex items-center gap-1 font-[obvisouly] text-[#3B0017] cursor-pointer "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>
              <svg
                className={`w-6 h-6 inline-block transform transition-transform duration-300 ease-in-out ${
                  hover ? "rotate-12 scale-[1.09] " : "text-[#3B0017]"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
            </span>
            SEARCH
          </div>
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="flex items-center gap-1 cursor-pointer "
          >
            <span>
              <svg
                className={`w-5 h-5 inline-block transform transition-transform duration-500 ease-in-out ${
                  isHover ? "rotate-12 scale-[1.09] " : "text-[#3B0017] "
                }`}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.238 3.55423C10.1872 2.91061 10.6687 2.3477 11.3134 2.29686C11.3193 2.29639 11.325 2.29672 11.3309 2.29636C11.1647 2.11195 11.0549 1.87436 11.0339 1.60799C10.9831 0.964423 11.4646 0.401461 12.1093 0.350616C12.5867 0.312957 13.0192 0.567143 13.2324 0.962763C13.3809 0.538615 13.7681 0.219778 14.2456 0.18212C14.8903 0.131274 15.454 0.611795 15.5048 1.25536C15.5266 1.5318 15.4497 1.79301 15.3044 2.00552C15.3783 1.98441 15.4554 1.97017 15.535 1.96389C16.1797 1.91304 16.7435 2.39357 16.7942 3.03713C16.845 3.6807 16.3635 4.24361 15.7188 4.29445C15.6328 4.30124 15.5484 4.29791 15.4664 4.28667C15.6542 4.47607 15.7789 4.72985 15.8015 5.01641C15.8523 5.65997 15.3708 6.22288 14.7261 6.27373C14.2486 6.31139 13.8162 6.0572 13.603 5.66158C13.4545 6.08573 13.0672 6.40457 12.5898 6.44222C11.9451 6.49307 11.3813 6.01255 11.3306 5.36904C11.3089 5.09451 11.3848 4.83515 11.5281 4.62347C11.5177 4.62455 11.5077 4.62664 11.4973 4.62746C10.8526 4.67831 10.2888 4.19779 10.2381 3.55427L10.238 3.55423Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1.238 3.55423C1.18724 2.91061 1.66872 2.3477 2.31338 2.29686C2.31928 2.29639 2.32503 2.29672 2.33089 2.29636C2.16471 2.11195 2.05488 1.87436 2.03387 1.60799C1.98312 0.964423 2.4646 0.401461 3.10926 0.350616C3.58673 0.312957 4.01918 0.567143 4.23236 0.962763C4.38088 0.538615 4.76814 0.219778 5.24561 0.18212C5.89027 0.131274 6.45405 0.611795 6.50481 1.25536C6.52661 1.5318 6.44972 1.79301 6.30439 2.00552C6.37831 1.98441 6.45537 1.97017 6.53503 1.96389C7.17969 1.91304 7.74347 2.39357 7.79423 3.03713C7.84499 3.6807 7.3635 4.24361 6.71884 4.29445C6.63282 4.30124 6.54844 4.29791 6.46635 4.28667C6.65421 4.47607 6.7789 4.72985 6.8015 5.01641C6.85226 5.65997 6.37077 6.22288 5.72611 6.27373C5.24864 6.31139 4.81619 6.0572 4.60301 5.66158C4.45449 6.08573 4.06723 6.40457 3.58976 6.44222C2.9451 6.49307 2.38132 6.01255 2.33056 5.36904C2.30891 5.09451 2.38475 4.83515 2.52812 4.62347C2.51774 4.62455 2.5077 4.62664 2.49725 4.62746C1.85259 4.67831 1.28876 4.19774 1.238 3.55423Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 9.89249C3.04577 18.1192 14.9622 18.1192 16.008 9.89248L17 10.0186C15.8061 19.4105 2.20187 19.4105 1.00798 10.0186L2 9.89249Z"
                  fill="currentColor"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
            ACCOUNT
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
