
export type AppScreen = 'SELECT_SCHOOL' | 'LOGIN' | 'DASHBOARD';

export interface Subject {
  name: string;
  marks: number;
  grade: string;
}

export interface ExamResult {
  id: string;
  title: string;
  gpa: string;
  status: 'Passed' | 'Failed';
  subjects: Subject[];
}

export interface StudentInfo {
  name: string;
  class: string;
  rollNo: string;
  school: string;
}
