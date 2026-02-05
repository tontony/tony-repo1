import {
  getLessonById,
  getExercisesByLessonId,
  getLessonsByDifficulty,
  getLessonsByType,
  lessons,
  exercises,
} from '@/lib/data';

describe('Data utilities', () => {
  describe('getLessonById', () => {
    it('should return lesson when valid id is provided', () => {
      const lesson = getLessonById('1');
      expect(lesson).toBeDefined();
      expect(lesson?.id).toBe('1');
      expect(lesson?.title).toBe('The Magic of Vowels');
    });

    it('should return undefined when invalid id is provided', () => {
      const lesson = getLessonById('999');
      expect(lesson).toBeUndefined();
    });
  });

  describe('getExercisesByLessonId', () => {
    it('should return exercises for a valid lesson id', () => {
      const lessonExercises = getExercisesByLessonId('1');
      expect(lessonExercises.length).toBeGreaterThan(0);
      expect(lessonExercises.every((ex) => ex.lessonId === '1')).toBe(true);
    });

    it('should return empty array for invalid lesson id', () => {
      const lessonExercises = getExercisesByLessonId('999');
      expect(lessonExercises).toEqual([]);
    });
  });

  describe('getLessonsByDifficulty', () => {
    it('should return beginner lessons', () => {
      const beginnerLessons = getLessonsByDifficulty('beginner');
      expect(beginnerLessons.length).toBeGreaterThan(0);
      expect(beginnerLessons.every((l) => l.difficulty === 'beginner')).toBe(true);
    });

    it('should return intermediate lessons', () => {
      const intermediateLessons = getLessonsByDifficulty('intermediate');
      expect(intermediateLessons.length).toBeGreaterThan(0);
      expect(intermediateLessons.every((l) => l.difficulty === 'intermediate')).toBe(true);
    });

    it('should return advanced lessons', () => {
      const advancedLessons = getLessonsByDifficulty('advanced');
      expect(advancedLessons.length).toBeGreaterThan(0);
      expect(advancedLessons.every((l) => l.difficulty === 'advanced')).toBe(true);
    });
  });

  describe('getLessonsByType', () => {
    it('should return reading lessons', () => {
      const readingLessons = getLessonsByType('reading');
      expect(readingLessons.length).toBeGreaterThan(0);
      expect(readingLessons.every((l) => l.type === 'reading')).toBe(true);
    });

    it('should return writing lessons', () => {
      const writingLessons = getLessonsByType('writing');
      expect(writingLessons.length).toBeGreaterThan(0);
      expect(writingLessons.every((l) => l.type === 'writing')).toBe(true);
    });
  });

  describe('Data integrity', () => {
    it('should have lessons data', () => {
      expect(lessons.length).toBeGreaterThan(0);
    });

    it('should have exercises data', () => {
      expect(exercises.length).toBeGreaterThan(0);
    });

    it('all lessons should have required fields', () => {
      lessons.forEach((lesson) => {
        expect(lesson.id).toBeDefined();
        expect(lesson.title).toBeDefined();
        expect(lesson.description).toBeDefined();
        expect(lesson.type).toBeDefined();
        expect(lesson.difficulty).toBeDefined();
        expect(lesson.content).toBeDefined();
      });
    });

    it('all exercises should have required fields', () => {
      exercises.forEach((exercise) => {
        expect(exercise.id).toBeDefined();
        expect(exercise.lessonId).toBeDefined();
        expect(exercise.question).toBeDefined();
        expect(exercise.type).toBeDefined();
      });
    });
  });
});
