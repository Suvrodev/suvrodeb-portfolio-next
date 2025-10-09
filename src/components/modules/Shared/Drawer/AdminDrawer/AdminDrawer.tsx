import "./AdminDrawer.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImage from "@/app/assets/HeaderImage/myLogo.png";
import NavLinkSection from "./NavLinkSection/NavLinkSection";
import Logout from "../../Logout";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AdminDrawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="">
      {/* Overlay with smooth animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ClassName e min-h-screen na diye h-screen dite hobe na hole mibile e scroll hobe na */}

      {/* Drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`
          fixed top-0 left-0 h-screen 
         
           bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900/90
          z-50 shadow-xl p-6 w-72 border-r border-green-200
          md:sticky md:top-0 md:h-screen md:translate-x-0 md:flex-shrink-0
          flex flex-col justify-between 
        `}
      >
        {/* Content base na hole nicher div ta uthaiya dite hobe */}
        <div className=" flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
          {/* User Info with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2 mb-8 mt-20 md:mt-0 "
          >
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={logoImage}
                alt="User"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="font-semibold text-xl text-gray-800 flex gap-x-1">
                {/* <span> {user?.firstName}</span>
                <span> {user?.lastName}</span> */}
              </h2>
              <p className="text-sm text-gray-500 mt-1 capitalize">
                {/* {user?.activeRole} */}
              </p>
            </div>
          </motion.div>

          {/* Menu Items with staggered animation */}
          <NavLinkSection isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="my-4">
            <Logout />
          </div>
        </div>

        {/* Footer with subtle animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-xs text-gray-400 flex flex-col items-center"
        >
          <div className="w-16 h-px bg-gray-200 mb-3"></div>
          <p>&copy; 2025 Suvrodeb Howlader</p>
          <p className="mt-1">All rights reserved</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDrawer;
