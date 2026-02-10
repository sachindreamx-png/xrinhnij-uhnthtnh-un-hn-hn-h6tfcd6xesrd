
import React from 'react';

export const DISTRICTS = [
  "Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan", "Biratnagar", "Janakpur"
];

export const SCHOOLS = [
  "Shree Gyanodaya Secondary School",
  "Adarsha Higher Secondary School",
  "Mount Everest Academy",
  "Himalayan English Boarding School",
  "Kathmandu Model School"
];

export const MOCK_RESULTS = [
  {
    id: 'mid-term',
    title: 'Mid Term Exam',
    gpa: '3.45',
    status: 'Passed',
    subjects: [
      { name: 'English', marks: 85, grade: 'A' },
      { name: 'Mathematics', marks: 78, grade: 'B+' },
      { name: 'Science', marks: 90, grade: 'A+' },
      { name: 'Nepali', marks: 88, grade: 'A' }
    ]
  },
  {
    id: 'final-term',
    title: 'Final Term Exam',
    gpa: '3.80',
    status: 'Passed',
    subjects: [
      { name: 'English', marks: 92, grade: 'A+' },
      { name: 'Mathematics', marks: 88, grade: 'A' },
      { name: 'Science', marks: 94, grade: 'A+' },
      { name: 'Nepali', marks: 85, grade: 'A' }
    ]
  }
];

export const MountainIllustration = () => (
  <svg className="mountain-layer opacity-20" viewBox="0 0 400 200" preserveAspectRatio="none">
    <path d="M0 200 L100 120 L200 180 L300 100 L400 200 Z" fill="#ffffff" />
    <path d="M0 200 L150 140 L250 190 L350 110 L400 200 Z" fill="#ffffff" opacity="0.5" />
  </svg>
);
