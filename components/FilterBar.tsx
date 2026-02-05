'use client';

import { Lesson } from '@/types';
import { soundPlayer } from '@/lib/sound';

interface FilterBarProps {
  selectedType: 'all' | Lesson['type'];
  selectedDifficulty: 'all' | Lesson['difficulty'];
  onTypeChange: (type: 'all' | Lesson['type']) => void;
  onDifficultyChange: (difficulty: 'all' | Lesson['difficulty']) => void;
}

export default function FilterBar({
  selectedType,
  selectedDifficulty,
  onTypeChange,
  onDifficultyChange,
}: FilterBarProps) {
  const handleTypeChange = (type: 'all' | Lesson['type']) => {
    soundPlayer.playClick();
    onTypeChange(type);
  };

  const handleDifficultyChange = (difficulty: 'all' | Lesson['difficulty']) => {
    soundPlayer.playClick();
    onDifficultyChange(difficulty);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-4 border-purple-200">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-3">
            📚 Lesson Type
          </label>
          <div className="flex gap-3 flex-wrap">
            {['all', 'reading', 'writing'].map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type as any)}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  selectedType === type
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type === 'all' ? '🌟 All' : type === 'reading' ? '📖 Reading' : '✍️ Writing'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-gray-700 mb-3">
            🎯 Difficulty Level
          </label>
          <div className="flex gap-3 flex-wrap">
            {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => handleDifficultyChange(difficulty as any)}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  selectedDifficulty === difficulty
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {difficulty === 'all'
                  ? '🌟 All'
                  : difficulty === 'beginner'
                  ? '🟢 Beginner'
                  : difficulty === 'intermediate'
                  ? '🟡 Intermediate'
                  : '🔴 Advanced'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
