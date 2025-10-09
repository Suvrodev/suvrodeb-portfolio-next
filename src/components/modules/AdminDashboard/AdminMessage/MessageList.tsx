"use client";

import { Trash } from "lucide-react";
import { TMessage } from "@/components/types/globalTypes";
import { formatTime } from "@/components/utils/Functions/formateTime";
import { formatDate } from "@/components/utils/Functions/formatDate";

interface IProps {
  messages: TMessage[];
  messageNumber: number;
  onSelect: (index: number, id: string) => void;
  onDelete: (id: string) => void;
}

const MessageList = ({
  messages,
  messageNumber,
  onSelect,
  onDelete,
}: IProps) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-transparent">
      <h2 className="text-lg font-semibold text-emerald-400 px-5 py-4 border-b border-gray-700">
        Inbox ({messages?.length})
      </h2>

      {messages.length === 0 && (
        <p className="text-center text-gray-400 py-10">No messages yet</p>
      )}

      {messages.map((msg, idx) => (
        <div
          key={msg._id}
          onClick={() => onSelect(idx, msg._id)}
          className={`flex justify-between items-center mx-3 my-2 px-3 py-3 rounded-md cursor-pointer transition-all duration-300 ${
            idx === messageNumber
              ? "bg-emerald-600/20 border border-emerald-500/40"
              : "hover:bg-emerald-500/10 border border-transparent"
          }`}
        >
          <div className="flex flex-col gap-1 w-[80%]">
            <p className="text-sm font-semibold text-white truncate">
              {msg?.name}
            </p>
            <span className="text-xs text-gray-400">
              {formatTime(msg?.createdAt)}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(msg?.createdAt)}
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {!msg.isRead && (
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(msg._id);
              }}
              className="p-[6px] rounded-md bg-red-500/80 hover:bg-red-600 transition-all"
            >
              <Trash size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
