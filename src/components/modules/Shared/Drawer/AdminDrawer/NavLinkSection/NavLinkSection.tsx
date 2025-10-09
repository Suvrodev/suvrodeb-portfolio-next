"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { adminDashboardContents } from "../drawerComponents/adminDashboardContents";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavLinkSection = ({ isOpen, setIsOpen }: IProps) => {
  const path = usePathname();

  return (
    <nav className="flex-1 mt-4">
      <ul className="flex flex-col gap-y-3 md:gap-y-4">
        {adminDashboardContents.map((item, idx) => {
          const isActive = path === item.href;
          const Icon = item.icon;

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
            >
              <Link
                href={item.href}
                onClick={() => isOpen && setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                {/* Icon */}
                <span
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "text-purple-400" : "text-purple-300"
                  }`}
                >
                  <Icon
                    size={item.iconSize}
                    className={`${
                      isActive ? "text-purple-400" : "text-purple-300"
                    }`}
                  />
                </span>

                {/* Label */}
                <span
                  className={`text-[15px] font-medium tracking-wide ${
                    isActive ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </span>

                {/* Arrow Icon */}
                <span
                  className={`ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isActive ? "opacity-100 text-purple-400" : ""
                  }`}
                >
                  →
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinkSection;
