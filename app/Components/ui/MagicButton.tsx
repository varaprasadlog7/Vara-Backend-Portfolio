"use client";
import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-10 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2.8s_linear_infinite] bg-[conic-gradient(from_120deg_at_50%_50%,#193257_0%,#2ecdf2_45%,#f6a62f_65%,#193257_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
  className={`inline-flex magic-button-text h-full w-full cursor-pointer items-center justify-center rounded-full
    px-7 text-sm font-semibold text-slate-100 backdrop-blur-3xl gap-2 bg-[#0f1728] ${otherClasses}`}
>
  {position === "left" && icon}
  {title}
  {position === "right" && icon}
</span>


    </button>
  );
};

export default MagicButton;