'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Lesson } from '@/types';
import { soundPlayer } from '@/lib/sound';

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
}

export default function LessonModal({ lesson, onClose }: LessonModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePlaySound = () => {
    soundPlayer.playSuccess();
  };

  const handleClose = () => {
    soundPlayer.playClick();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">{lesson.title}</h2>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-8">
          {lesson.imageUrl && (
            <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              <Image
                src={lesson.imageUrl}
                alt={lesson.title}
                fill
                className="object-contain p-4"
              />
            </div>
          )}

          <div className="bg-blue-50 rounded-2xl p-6 mb-6 border-4 border-blue-200">
            <p className="text-xl text-gray-800 leading-relaxed">
              {lesson.content}
            </p>
          </div>

          <button
            onClick={handlePlaySound}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-6 rounded-2xl text-xl font-bold hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <span className="text-3xl">🔊</span>
            Play Sound
          </button>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={handleClose}
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-xl text-lg font-bold hover:bg-gray-300 transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                soundPlayer.playSuccess();
                setTimeout(handleClose, 1000);
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all"
            >
              Complete! ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
