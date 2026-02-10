
import React, { useState } from 'react';
import { BookOpen, GraduationCap, ChevronDown, MapPin, School } from 'lucide-react';
import { DISTRICTS, SCHOOLS } from '../constants';

interface Props {
  onContinue: (school: string) => void;
}

const SelectSchoolScreen: React.FC<Props> = ({ onContinue }) => {
  const [district, setDistrict] = useState('');
  const [school, setSchool] = useState('');

  return (
    <div className="flex flex-col items-center h-full">
      {/* Header */}
      <div className="flex flex-col items-center mt-12 mb-10 text-center">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-xl border border-white/20">
          <GraduationCap size={48} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Student Result Portal</h1>
        <p className="text-blue-100/80 text-sm">View your academic results easily</p>
      </div>

      {/* Card Content */}
      <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[24px] shadow-2xl">
        <h2 className="text-white font-semibold text-lg mb-6 text-center">Select Your School</h2>
        
        <div className="space-y-4">
          {/* District Select */}
          <div className="relative">
            <label className="text-xs text-blue-100/60 uppercase font-bold mb-1 ml-1 block">District</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="" disabled className="bg-blue-900 text-white">Choose District</option>
                {DISTRICTS.map(d => <option key={d} value={d} className="bg-blue-900 text-white">{d}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
            </div>
          </div>

          {/* School Select */}
          <div className="relative">
            <label className="text-xs text-blue-100/60 uppercase font-bold mb-1 ml-1 block">School</label>
            <div className="relative">
              <School size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              >
                <option value="" disabled className="bg-blue-900 text-white">Choose School</option>
                {SCHOOLS.map(s => <option key={s} value={s} className="bg-blue-900 text-white">{s}</option>)}
              </select>
              <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
            </div>
          </div>
        </div>

        <button 
          onClick={() => school && onContinue(school)}
          disabled={!school}
          className="w-full mt-8 bg-[#10B981] hover:bg-[#0da673] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-[#10B981]/20 transition-all active:scale-95"
        >
          Continue
        </button>
      </div>

      <div className="mt-auto pb-6">
        <button className="text-white/60 text-sm font-medium hover:text-white transition-colors">
          Need Help?
        </button>
      </div>
    </div>
  );
};

export default SelectSchoolScreen;
