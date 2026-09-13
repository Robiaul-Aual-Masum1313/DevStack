import Logo from "../assets/logo.png";
import Hambarger from "../assets/hamburger.png";

export default function Nav() {
  return (
    <>
      {/* for every break point after sm  */}
      <div className="hidden lg:block border border-[#eee] py-5 sticky top-0 z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start items-center gap-3.5">
            <img src={Logo} alt="" />{" "}
            <span
              style={{
                background: "var(--brand-gradent)",
                backgroundClip: "var(--brand-clip)",
                WebkitBackgroundClip: "text",
                color: "var(--brand-color)",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[30px] font-bold"
            >
              DevStack
            </span>
          </div>
          <nav>
            <ul className="flex justify-center items-center gap-8 text-[#475569] font-semibold text-[14px]">
              <li className="">
                <a className="text-[#DB2777]" href="">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-500 hover:text-[#DB2777]"
                  href=""
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-500 hover:text-[#DB2777]"
                  href=""
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-500 hover:text-[#DB2777]"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-500 hover:text-[#DB2777]"
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <button className="px-5 py-1.5 cursor-pointer font-semibold text-[14px]">
              Login
            </button>
            <button
              style={{ background: "var(--brand-gradent)" }}
              className="px-5 py-1.5 rounded-full text-white cursor-pointer font-semibold text-[14px]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* for sm breakpoint only */}
      <div className=" lg:hidden border border-[#eee] py-5 px-2.5 sticky top-0 z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <nav><img src={Hambarger} alt="" /></nav>
          <div className="flex justify-start items-center gap-3.5">
            <img src={Logo} alt="" />
          </div>
          <div>
            <button className="px-2 py-1 cursor-pointer font-semibold text-[11px]">
              Login
            </button>
            <button
              style={{ background: "var(--brand-gradent)" }}
              className="px-2 py-1 rounded-full text-white cursor-pointer font-semibold text-[11px]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
