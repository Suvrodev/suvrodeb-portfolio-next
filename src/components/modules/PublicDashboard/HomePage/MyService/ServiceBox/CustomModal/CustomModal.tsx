"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#6A29C5] to-[#5520A5] text-white rounded-2xl shadow-2xl p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {title && (
              <h2 className="text-xl font-semibold text-center mb-4">
                {title}
              </h2>
            )}
            <div className="text-center">{children}</div>
            <button
              onClick={onClose}
              className="mt-6 mx-auto block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
