import { Lesson, Exercise } from '@/types';

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'The Magic of Vowels',
    description: 'Learn about vowels with fun examples!',
    type: 'reading',
    difficulty: 'beginner',
    content: 'Vowels are special letters: A, E, I, O, U. They make words sing! 🎵',
    imageUrl: '/images/vowels.svg',
    soundUrl: '/sounds/vowels.mp3',
  },
  {
    id: '2',
    title: 'Building Sentences',
    description: 'Create your own sentences!',
    type: 'writing',
    difficulty: 'beginner',
    content: 'A sentence starts with a capital letter and ends with a period. Subject + Verb + Object!',
    imageUrl: '/images/sentence.svg',
    soundUrl: '/sounds/sentence.mp3',
  },
  {
    id: '3',
    title: 'Rhyming Words',
    description: 'Discover words that rhyme!',
    type: 'reading',
    difficulty: 'beginner',
    content: 'Cat, Hat, Bat - they all rhyme! Can you find more? 🎭',
    imageUrl: '/images/rhyme.svg',
    soundUrl: '/sounds/rhyme.mp3',
  },
  {
    id: '4',
    title: 'Story Writing',
    description: 'Write your first short story!',
    type: 'writing',
    difficulty: 'intermediate',
    content: 'Every story has a beginning, middle, and end. Let your imagination soar! 🚀',
    imageUrl: '/images/story.svg',
    soundUrl: '/sounds/story.mp3',
  },
  {
    id: '5',
    title: 'Adjectives Adventure',
    description: 'Make your writing colorful!',
    type: 'reading',
    difficulty: 'intermediate',
    content: 'Adjectives describe things. Big, small, colorful, happy - they make sentences interesting! 🌈',
    imageUrl: '/images/adjectives.svg',
    soundUrl: '/sounds/adjectives.mp3',
  },
  {
    id: '6',
    title: 'Poetry Power',
    description: 'Express yourself through poetry!',
    type: 'writing',
    difficulty: 'advanced',
    content: 'Poetry lets you play with words, rhythm, and rhyme. Be creative! ✨',
    imageUrl: '/images/poetry.svg',
    soundUrl: '/sounds/poetry.mp3',
  },
];

export const exercises: Exercise[] = [
  {
    id: 'e1',
    lessonId: '1',
    question: 'Which of these is a vowel?',
    type: 'multiple-choice',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
  },
  {
    id: 'e2',
    lessonId: '2',
    question: 'Complete the sentence: The cat ___ on the mat.',
    type: 'fill-blank',
    correctAnswer: 'sat',
  },
  {
    id: 'e3',
    lessonId: '3',
    question: 'Which word rhymes with "dog"?',
    type: 'multiple-choice',
    options: ['log', 'cat', 'run', 'fish'],
    correctAnswer: 'log',
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getExercisesByLessonId(lessonId: string): Exercise[] {
  return exercises.filter((exercise) => exercise.lessonId === lessonId);
}

export function getLessonsByDifficulty(difficulty: Lesson['difficulty']): Lesson[] {
  return lessons.filter((lesson) => lesson.difficulty === difficulty);
}

export function getLessonsByType(type: Lesson['type']): Lesson[] {
  return lessons.filter((lesson) => lesson.type === type);
}
