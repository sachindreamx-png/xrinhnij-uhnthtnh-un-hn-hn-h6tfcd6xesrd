
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ChevronLeft } from 'lucide-react';

interface Props {
  onLogin: () => void;
  onSwitchSchool: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin, onSwitchSchool }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && password) {
      onLogin();
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-10 duration-500">
      {/* Header Nav */}
      <button 
        onClick={onSwitchSchool}
        className="flex items-center text-white/70 hover:text-white mb-8 group"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Change School</span>
      </button>

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Student Login</h1>
        <p className="text-blue-100/70">Enter your credentials to access your portal</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Student ID */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/90 ml-1">Student ID</label>
          <div className="relative">
            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text"
              placeholder="Enter ID (e.g. 2035X)"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1 pr-1">
            <label className="text-sm font-medium text-white/90">Password</label>
            <button type="button" className="text-xs text-blue-200/60 hover:text-white">Forgot Password?</button>
          </div>
          <div className="relative">
            <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full mt-8 bg-[#10B981] hover:bg-[#0da673] text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#10B981]/20 transition-all active:scale-95"
        >
          Login
        </button>

        <button 
          type="button"
          onClick={onSwitchSchool}
          className="w-full text-center text-white/60 text-sm font-medium underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
        >
          Switch School
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
