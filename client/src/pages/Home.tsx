import { ChatWidget } from "@/components/ChatWidget";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col">
        <div className="bg-[#E91E63] p-4 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">MySchool Assistant</h1>
              <p className="text-xs text-white/80">Your intelligent guide for portal.myschoolct.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://portal.myschoolct.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-white/80 transition-colors bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              portal.myschoolct.com
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative overflow-hidden">
          <ChatWidget isEmbedded={true} />
        </div>
      </div>
      
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>© 2026 MySchool Assistant. All rights reserved.</p>
      </div>
    </div>
  );
}
