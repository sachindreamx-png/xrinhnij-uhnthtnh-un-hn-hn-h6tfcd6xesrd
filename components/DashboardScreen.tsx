
import React, { useState } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Share2, 
  LogOut, 
  Trophy, 
  UserCircle 
} from 'lucide-react';
import { MOCK_RESULTS } from '../constants';
import { ExamResult } from '../types';

interface Props {
  school: string;
  onLogout: () => void;
}

const ResultCard: React.FC<{ result: ExamResult }> = ({ result }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-[20px] overflow-hidden shadow-lg transition-all">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="text-[#10B981]" size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-base">{result.title}</h3>
            <p className="text-xs text-blue-100/60 uppercase font-semibold">
              GPA: <span className="text-[#10B981]">{result.gpa}</span> | Status: <span className="text-[#10B981]">{result.status}</span>
            </p>
          </div>
        </div>
        {expanded ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
      </button>

      {expanded && (
        <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="h-[1px] bg-white/10 mb-4" />
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] text-white/40 uppercase font-bold px-2">
              <span>Subject</span>
              <div className="flex gap-8">
                <span>Marks</span>
                <span className="w-6 text-right">Grade</span>
              </div>
            </div>
            {result.subjects.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white/5 rounded-xl p-3 px-4 border border-white/5">
                <span className="text-white text-sm font-medium">{s.name}</span>
                <div className="flex items-center gap-8">
                  <span className="text-white/60 text-sm font-mono">{s.marks}</span>
                  <span className={`text-sm font-bold w-6 text-right ${s.grade.includes('A') ? 'text-[#10B981]' : 'text-yellow-400'}`}>
                    {s.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardScreen: React.FC<Props> = ({ school, onLogout }) => {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">My Results</h1>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <UserCircle className="text-white/80" />
          </div>
        </div>
        
        {/* Student Profile Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-[24px] shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">SS</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Suman Shrestha</h2>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-blue-100/60 mt-1">
                <span className="bg-white/10 px-2 py-0.5 rounded text-white/80">Class 10</span>
                <span className="bg-white/10 px-2 py-0.5 rounded text-white/80">Roll: 2035</span>
                <span className="w-full mt-1 text-blue-200/80 truncate">{school}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider ml-1">Available Exams</h3>
          {MOCK_RESULTS.map(result => (
            <ResultCard key={result.id} result={result} />
          ))}
          
          {/* Mock Extra Activity */}
          <div className="w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-[20px] p-5 opacity-80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Trophy className="text-blue-300" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Extra Activities Result</h3>
                  <p className="text-xs text-blue-100/60 uppercase font-semibold">Grade: <span className="text-[#10B981]">A</span></p>
                </div>
              </div>
              <ChevronDown className="text-white/40" />
            </div>
          </div>
        </div>

        {/* Global Actions */}
        <div className="flex gap-3 mb-10">
          <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 py-3 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-bold transition-all active:scale-95">
            <Download size={18} />
            Download PDF
          </button>
          <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 py-3 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-bold transition-all active:scale-95">
            <Share2 size={18} />
            Share Result
          </button>
        </div>

        {/* Logout */}
        <button 
          onClick={onLogout}
          className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all active:scale-95 mb-6"
        >
          <LogOut size={20} />
          Logout Account
        </button>
      </div>
    </div>
  );
};

export default DashboardScreen;
