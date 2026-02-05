'use client';

import Image from 'next/image';
import { Lesson } from '@/types';
import { soundPlayer } from '@/lib/sound';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export default function LessonCard({ lesson, onClick }: LessonCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    advanced: 'bg-red-100 text-red-800 border-red-300',
  };

  const typeIcons = {
    reading: '📖',
    writing: '✍️',
  };

  const handleClick = () => {
    soundPlayer.playClick();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-blue-200 hover:border-blue-400">
        {lesson.imageUrl && (
          <div className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100">
            <Image
              src={lesson.imageUrl}
              alt={lesson.title}
              fill
              className="object-contain p-4"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-4xl">{typeIcons[lesson.type]}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${
                difficultyColors[lesson.difficulty]
              }`}
            >
              {lesson.difficulty}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {lesson.title}
          </h3>
          <p className="text-gray-600 text-base">{lesson.description}</p>
        </div>
      </div>
    </div>
  );
}
