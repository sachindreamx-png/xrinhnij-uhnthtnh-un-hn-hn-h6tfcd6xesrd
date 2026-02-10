
import React, { useState, useEffect } from 'react';
import { AppScreen } from './types';
import SelectSchoolScreen from './components/SelectSchoolScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import { MountainIllustration } from './constants';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('SELECT_SCHOOL');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simple simulated page transitions
  const navigateTo = (nextScreen: AppScreen) => {
    setIsLoading(true);
    setTimeout(() => {
      setScreen(nextScreen);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black overflow-hidden">
      {/* Phone Frame Mockup (Optional for desktop view, but ensures mobile-first scaling) */}
      <div className="relative w-full max-w-md h-screen md:h-[844px] md:rounded-[40px] md:border-[8px] md:border-gray-800 bg-[#2563EB] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Main App Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB] to-[#1E40AF]"></div>
        
        {/* Subtle Nepal Mountains Illustration */}
        <MountainIllustration />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-blue-900/40 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="mt-4 text-white font-medium">Please wait...</p>
          </div>
        )}

        {/* Content Area */}
        <main className="relative z-10 flex-1 overflow-y-auto px-6 py-8">
          {screen === 'SELECT_SCHOOL' && (
            <SelectSchoolScreen 
              onContinue={(school) => {
                setSelectedSchool(school);
                navigateTo('LOGIN');
              }} 
            />
          )}
          {screen === 'LOGIN' && (
            <LoginScreen 
              onLogin={() => navigateTo('DASHBOARD')}
              onSwitchSchool={() => navigateTo('SELECT_SCHOOL')}
            />
          )}
          {screen === 'DASHBOARD' && (
            <DashboardScreen 
              school={selectedSchool}
              onLogout={() => navigateTo('SELECT_SCHOOL')}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
