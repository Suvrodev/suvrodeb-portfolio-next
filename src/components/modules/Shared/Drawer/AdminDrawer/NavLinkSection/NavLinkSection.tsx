"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { adminDashboardContents } from "../drawerComponents/adminDashboardContents";
import { ChevronDown } from "lucide-react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavLinkSection = ({ isOpen, setIsOpen }: IProps) => {
  const path = usePathname();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubMenu = (id: string) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  return (
    <nav className="flex-1 mt-4">
      <ul className="flex flex-col gap-y-1 md:gap-y-2">
        {adminDashboardContents.map((item, idx) => {
          const isActive =
            path === item.href ||
            (item.subLinks && item.subLinks.some((sub) => sub.href === path));

          const Icon = item.icon;
          const hasSubLinks = !!item.subLinks;

          // Detect if the icon is from Material UI or Lucide
          const isLucide = !("muiName" in Icon);

          // Unified icon rendering logic
          const renderIcon = () => {
            if (isLucide) {
              return (
                <Icon
                  size={item.iconSize}
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "text-purple-400" : "text-purple-300"
                  }`}
                />
              );
            } else {
              // Material UI icon styling fix
              return (
                <Icon
                  sx={{
                    fontSize: `${item.iconSize}px`,
                    width: `${item.iconSize}px`,
                    height: `${item.iconSize}px`,
                    minWidth: `${item.iconSize}px`,
                    minHeight: `${item.iconSize}px`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "text-purple-400" : "text-purple-300"
                  }`}
                />
              );
            }
          };

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
            >
              {/* === MAIN MENU ITEM === */}
              {hasSubLinks ? (
                <div
                  onClick={() => toggleSubMenu(item.id)}
                  className={`flex items-center gap-4 px-2 py-1 rounded-xl transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {/* ICON */}
                  {renderIcon()}

                  {/* LABEL */}
                  <span
                    className={`text-[12px] ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* CHEVRON */}
                  <span
                    className={`ml-auto text-gray-400 transition-transform duration-300 ${
                      expandedMenu === item.id ? "rotate-180" : ""
                    } ${isActive ? "text-purple-400" : ""}`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => isOpen && setIsOpen(false)}
                  className={`flex items-center gap-4 px-2 py-1 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {/* ICON */}
                  {renderIcon()}

                  {/* LABEL */}
                  <span
                    className={`text-[12px] ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )}

              {/* === SUB MENU === */}
              {hasSubLinks && expandedMenu === item.id && (
                <ul className="ml-6 mt-1 flex flex-col gap-y-1">
                  {item.subLinks.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        onClick={() => isOpen && setIsOpen(false)}
                        className={`flex items-center gap-4 px-2 py-1 rounded-xl transition-all duration-300 group ${
                          path === subItem.href
                            ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 shadow-md"
                            : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <span
                          className={`text-[12px] ${
                            path === subItem.href
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {subItem.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinkSection;
