'use client';

import { useState } from 'react';
import LessonCard from '@/components/LessonCard';
import LessonModal from '@/components/LessonModal';
import FilterBar from '@/components/FilterBar';
import { lessons } from '@/lib/data';
import { Lesson } from '@/types';

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedType, setSelectedType] = useState<'all' | Lesson['type']>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | Lesson['difficulty']>('all');

  const filteredLessons = lessons.filter((lesson) => {
    const typeMatch = selectedType === 'all' || lesson.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || lesson.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-3 animate-bounce">
            📚 English Learning Adventure! 🚀
          </h1>
          <p className="text-xl text-center text-white opacity-90">
            Fun Reading & Writing for K-12 Students
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterBar
          selectedType={selectedType}
          selectedDifficulty={selectedDifficulty}
          onTypeChange={setSelectedType}
          onDifficultyChange={setSelectedDifficulty}
        />

        {filteredLessons.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-3xl text-gray-600">
              🔍 No lessons found. Try different filters!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => setSelectedLesson(lesson)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedLesson && (
        <LessonModal
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}

      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">
            Made with ❤️ for students with ADHD and Autism
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Learning should be fun, colorful, and engaging!
          </p>
        </div>
      </footer>
    </div>
  );
}
