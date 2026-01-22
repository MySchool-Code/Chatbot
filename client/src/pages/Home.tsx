import { ChatWidget } from "@/components/ChatWidget";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 text-white flex items-center justify-between shrink-0" style={{ backgroundColor: "#E91E63" }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">MySchool Assistant</h1>
            <p className="text-xs opacity-80">Your intelligent guide for portal.myschoolct.com</p>
          </div>
        </div>
      </div>
      
      {/* Chat Widget - Full Height */}
      <div className="flex-1 overflow-hidden">
        <ChatWidget isEmbedded={true} />
      </div>
      
      {/* Footer */}
      <div className="py-2 text-center text-gray-500 text-sm bg-white border-t">
        <p>© 2026 MySchool Assistant. All rights reserved.</p>
      </div>
    </div>
  );
}
