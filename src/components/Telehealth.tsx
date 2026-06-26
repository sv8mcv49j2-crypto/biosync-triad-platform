import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, Settings, MessageSquare, Users } from 'lucide-react';

const Telehealth = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isInCall, setIsInCall] = useState(false);

  if (!isInCall) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-200">
        <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
          <Video size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to join?</h2>
        <p className="text-gray-600 mb-8 text-center max-w-sm">
          Your appointment with <strong>Dr. Sarah Johnson</strong> is ready. Please check your camera and microphone settings before joining.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsInCall(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
          >
            Join Meeting
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
            Test Audio/Video
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
      {/* Remote Participant (Main View) */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
            <Users size={48} />
          </div>
          <p className="text-white font-medium">Dr. Sarah Johnson</p>
          <p className="text-gray-400 text-sm">Connecting...</p>
        </div>
      </div>

      {/* Local Participant (Self View) */}
      <div className="absolute top-6 right-6 w-48 h-32 bg-gray-700 rounded-xl border-2 border-gray-600 overflow-hidden shadow-lg">
        {isCameraOff ? (
          <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
            <VideoOff size={24} />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <UserPlaceholder />
          </div>
        )}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/50 rounded text-[10px] text-white">
          You (Alex)
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`p-3 rounded-full transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
        >
          {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
        <button 
          onClick={() => setIsCameraOff(!isCameraOff)}
          className={`p-3 rounded-full transition-all ${isCameraOff ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
        >
          {isCameraOff ? <VideoOff size={20} /> : <Video size={20} />}
        </button>
        <div className="w-px h-8 bg-gray-600 mx-2" />
        <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all">
          <MessageSquare size={20} />
        </button>
        <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all">
          <Settings size={20} />
        </button>
        <button 
          onClick={() => setIsInCall(false)}
          className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all ml-2"
        >
          <PhoneOff size={20} />
        </button>
      </div>

      {/* HIPAA Badge */}
      <div className="absolute top-6 left-6 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Secure HIPAA Connection</span>
      </div>
    </div>
  );
};

const UserPlaceholder = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Telehealth;
