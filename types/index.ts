export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'reading' | 'writing';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  imageUrl?: string;
  soundUrl?: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  question: string;
  type: 'multiple-choice' | 'fill-blank' | 'essay';
  options?: string[];
  correctAnswer?: string;
  imageUrl?: string;
}

export interface UserProgress {
  lessonId: string;
  completed: boolean;
  score?: number;
  lastAccessed: Date;
}
