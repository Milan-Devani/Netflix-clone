import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-[9.25rem] pb-[96px]">
      {/* Email Section */}
      <div className="text-center max-w-[48.9375rem] mx-auto w-full mb-6">
        <p className="font-SegoeUIRegular text-[1rem] leading-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-[8px] justify-center mt-4">
          <input
            type="email"
            className="p-3 rounded bg-[#161616b3] border border-[#808080b3] w-[71%] focus:outline-none text-black"
            placeholder="Email address"
          />
          <button className="font-NetflixSans_Bdflex flex items-center gap-[8px] bg-[#e50914] text-[1.5rem] font-medium px-6 py-3 rounded hover:bg-red-700">
            Get Started
            <RiArrowRightSLine className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Links Section */}

      <div className="mt-[80px]">
        <p className="text-[#ffffffb3]">
          Questions? Call <span className="underline">000-800-919-1694</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-[35px] text-sm mb-6">
        <div className="flex text-[#ffffffb3] flex-col space-y-2">
          {["FAQ", "Investor Relations", "Privacy", "Speed Test"].map(
            (item, ind) => {
              return (
                <li key={ind} className="list-none hover:underline">
                  <Link to="#">{item}</Link>
                </li>
              );
            }
          )}
        </div>
        <div className="flex flex-col space-y-2 text-[#ffffffb3]">
          {["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"].map(
            (item, ind) => {
              return (
                <li key={ind} className="list-none hover:underline">
                  <Link to="#">{item}</Link>
                </li>
              );
            }
          )}
        </div>
        <div className="flex flex-col space-y-2 text-[#ffffffb3]">
          {[
            "Account",
            "Ways to Watch",
            "Corporate Information",
            "Only on Netflix",
          ].map((item, ind) => {
            return (
              <li key={ind} className="list-none hover:underline">
                <Link to="#">{item}</Link>
              </li>
            );
          })}
        </div>

        <div className="flex flex-col space-y-2 text-[#ffffffb3]">
          {["Media Centre", "Terms of Use", "Contact Us"].map((item, ind) => {
            return (
              <li key={ind} className="list-none hover:underline">
                <Link to="#">{item}</Link>
              </li>
            );
          })}
        </div>
      </div>

      {/* Language and Netflix Info */}
      <div className="text-center mt-[80px]">
        {/* <select className="bg-gray-900 p-2 rounded-md">
          <option>English</option>
          <option>Hindi</option>
        </select> */}

        <div className="relative px-[8px] py-[4px] w-[7.8vw] rounded-[4px] border-[1px] border-[#545454] flex items-center font-NetflixSans_Md">
          <div>
            <IoLanguageSharp className="text-white" />
          </div>
          <select className="text-white appearance-none bg-transparent focus:outline-none pl-2 pr-6">
            <option className="font-NetflixSans_Md">English</option>
            <option>हिन्दी</option>
          </select>
          <div className="relative top-[-3px] right-[15px]">
            <FaSortDown className=" text-white  pointer-events-none" />
          </div>
        </div>
        <p className="mt-[30px] text-gray-400 text-left">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
