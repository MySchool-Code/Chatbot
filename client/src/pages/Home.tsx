import { ChatWidget } from "@/components/ChatWidget";
import { GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  hi: "Hindi",
  te: "Telugu",
  gu: "Gujarati"
};

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  // Sync language with localStorage on mount and listen for changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem("myschool_chat_language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    // Listen for storage changes (when ChatWidget changes language)
    const handleStorage = () => {
      const lang = localStorage.getItem("myschool_chat_language");
      if (lang) setSelectedLanguage(lang);
    };
    window.addEventListener("storage", handleStorage);

    // Also poll for changes since storage event doesn't fire in same tab
    const interval = setInterval(() => {
      const lang = localStorage.getItem("myschool_chat_language");
      if (lang && lang !== selectedLanguage) setSelectedLanguage(lang);
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, [selectedLanguage]);

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden">
      {/* Sticky Header - Never scrolls */}
      <div className="sticky top-0 z-50 p-4 text-white flex items-center justify-between shrink-0 shadow-md" style={{ backgroundColor: "#E91E63" }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">MySchool Assistant</h1>
            <p className="text-xs opacity-80">Your intelligent guide for portal.myschoolct.com</p>
          </div>
        </div>
        {/* Display selected language */}
        <div className="bg-white/20 px-3 py-1.5 rounded-lg text-sm font-medium">
          {LANGUAGE_NAMES[selectedLanguage] || "English"}
        </div>
      </div>
      
      {/* Chat Widget - Scrollable content area */}
      <div className="flex-1 overflow-hidden">
        <ChatWidget isEmbedded={true} />
      </div>
      
      {/* Footer */}
      <div className="py-2 text-center text-gray-500 text-xs bg-white border-t shrink-0">
        <p>© 2026 MySchool Assistant. All rights reserved.</p>
      </div>
    </div>
  );
}
