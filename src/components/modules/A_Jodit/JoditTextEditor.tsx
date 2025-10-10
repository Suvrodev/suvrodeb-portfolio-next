/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import "./JoditTextEditorLight.css";

import React, { useMemo, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// JoditReact must be loaded client-side
const JoditEditor = dynamic(
  () => import("jodit-react").then((m) => m.default),
  {
    ssr: false,
  }
);

type IProps = {
  value?: string; // ← prop 1
  onChange?: (val: string) => void; // ← prop 2
  maxChars?: number; // optional, for counter/limit
};

export default function JoditTextEditor({
  value = "",
  onChange,
  maxChars,
}: IProps) {
  const editor = useRef<any>(null);
  const [content, setContent] = useState<string>("");

  // keep internal state in sync with parent
  useEffect(() => {
    if (value !== content) setContent(value ?? "");
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const config = useMemo<any>(
    () => ({
      readonly: false,
      height: 560,
      toolbar: true,
      toolbarSticky: true,
      toolbarAdaptive: false,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: false,
      statusbar: false,
      spellcheck: true,

      // iframe চাইলে true দিন, না চাইলে false রাখুন
      iframe: false,
      iframeStyle: `
        html,body{margin:0;padding:8px;font:15px/1.6 system-ui;}
        /* শুধু spacing রাখুন, list-style-type force করবেন না */
        ol,ul{padding-left:20px; margin-left:20px; list-style-position: outside;}
        li{display:list-item;}
      `,

      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: "insert_as_html",
      uploader: {
        insertImageAsBase64URI: true,
      },
      filebrowser: {
        ajax: {
          url: "",
        },
      },
      removeButtons: [],
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "indent",
        "outdent",
        "|",
        "fontsize",
        "font",
        "brush",
        "paragraph",
        "lineHeight",
        "|",
        "image",
        "file",
        "video",
        "table",
        "link",
        "symbols",
        "emoji",
        "copyformat",
        "cut",
        "copy",
        "paste",
        "selectall",
        "hr",
        "|",
        "align",
        "left",
        "center",
        "right",
        "justify",
        "|",
        "undo",
        "redo",
        "find",
        "preview",
        "fullsize",
        "print",
        "about",
      ],
      controls: {
        // brush: {
        //   list: [
        //     { label: "Default", style: "" },
        //     { label: "Note", style: "color:#2b6cb0" },
        //     { label: "Warning", style: "color:#d97706" },
        //     { label: "Success", style: "color:#059669" },
        //   ],
        // },
      },
      style: {
        p: {
          margin: "0 0 12px",
          lineHeight: "1.6",
          fontSize: "15px",
        },
      },

      // Tab এবং Shift+Tab কে ইন্ডেন্ট/আউটডেন্টে বাঁধা
      commandToHotkeys: {
        indent: ["tab"],
        outdent: ["shift+tab"],
      },

      // চাইলে ইন্ডেন্ট কত px হবে সেটাও নির্দিষ্ট করতে পারেন
      indentMargin: 30, // default 40px হয়
    }),
    []
  );

  const handleChange = (nextVal: string) => {
    const limited =
      typeof maxChars === "number" ? nextVal.slice(0, maxChars) : nextVal;
    setContent(limited);
    onChange?.(limited);
  };

  return (
    <div className="relative">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // Jodit fires very frequently onChange; it’s fine to use it here
        onChange={(html: string) => handleChange(html)}
      />

      {typeof maxChars === "number" && (
        <div className="absolute bottom-3 right-3 text-xs bg-white/90 px-2 py-1 rounded-lg text-gray-600 shadow-sm">
          {content.length}/{maxChars}
        </div>
      )}
    </div>
  );
}
