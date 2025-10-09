"use client";

import { TMessage } from "@/components/types/globalTypes";

interface IProps {
  message?: TMessage;
}

const MessageDetails = ({ message }: IProps) => {
  if (!message) {
    return (
      <div className="h-full flex justify-center items-center text-gray-500">
        Select a message to view details
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-4 h-full">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <p className="italic text-gray-300">Email:</p>
        <p className="text-emerald-400 font-semibold">{message?.email}</p>
      </div>

      <div className="flex-1 bg-[#0E1C2E]/70 border border-gray-700 rounded-lg p-5 overflow-y-auto text-gray-200 leading-relaxed shadow-inner">
        {message?.message || "No message content."}
      </div>
    </div>
  );
};

export default MessageDetails;
