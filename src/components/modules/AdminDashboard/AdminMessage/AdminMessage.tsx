"use client";

import { useState } from "react";
import {
  useDelteMessageMutation,
  useGetMessageQuery,
  useUpdateMessageMutation,
} from "@/redux/features/Message/messageManagement";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import MessageList from "./MessageList";
import MessageDetails from "./MessageDetails";
import { useAppSelector } from "@/redux/hooks";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MessageLoading from "./MessageLoading";

const AdminMessage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [deleteMessage] = useDelteMessageMutation();
  const [updateMessage] = useUpdateMessageMutation();
  const { data, isLoading } = useGetMessageQuery(undefined, {
    skip: !user,
  });
  const messages = data?.data || [];

  const [messageNumber, setMessageNumber] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMessageShow = async (index: number, _id: string) => {
    setMessageNumber(index);
    setIsDrawerOpen(false); // 👈 Close drawer when a message is selected (mobile)
    const updateData = { isRead: true };
    await updateMessage({ _id, updateData }).unwrap();
  };

  const handleDeleteMessage = async (id: string) => {
    loadingToast("Deleting...");
    const res = await deleteMessage(id).unwrap();
    if (res?.status) okToast("Message deleted successfully");
  };

  if (!user || isLoading) {
    return <MessageLoading />;
  }

  return (
    <div className="h-screen bg-[#0A192F] text-white flex flex-col md:flex-row overflow-hidden border border-gray-700 shadow-xl relative">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#0E1C2E]/80 backdrop-blur-md">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 rounded-md bg-emerald-600/20 hover:bg-emerald-600/40 transition"
        >
          <Menu size={20} />
        </button>
        <p className="text-emerald-400 font-semibold">Messages</p>
      </div>

      {/* Sidebar (Desktop) */}
      <div className="hidden md:block md:w-[28%] border-r border-gray-700 bg-[#0E1C2E]/80 backdrop-blur-lg">
        <MessageList
          messages={messages}
          messageNumber={messageNumber}
          onSelect={handleMessageShow}
          onDelete={handleDeleteMessage}
        />
      </div>

      {/* Drawer (Mobile Animation) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0E1C2E]/95 backdrop-blur-md p-3"
          >
            <MessageList
              messages={messages}
              messageNumber={messageNumber}
              onSelect={handleMessageShow}
              onDelete={handleDeleteMessage}
            />

            {/* Close area */}
            <div
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-3 right-3 text-gray-300 text-sm px-3 py-2 rounded-md bg-emerald-600/20 hover:bg-emerald-600/40 cursor-pointer"
            >
              Close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Details */}
      <div className="w-full md:w-[72%] bg-gradient-to-b from-[#0A192F] to-[#091624]">
        <MessageDetails message={messages[messageNumber]} />
      </div>
    </div>
  );
};

export default AdminMessage;
