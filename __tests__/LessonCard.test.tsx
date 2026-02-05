import { render, screen } from '@testing-library/react';
import LessonCard from '@/components/LessonCard';
import { Lesson } from '@/types';

describe('LessonCard', () => {
  const mockLesson: Lesson = {
    id: '1',
    title: 'Test Lesson',
    description: 'This is a test lesson',
    type: 'reading',
    difficulty: 'beginner',
    content: 'Test content',
    imageUrl: '/images/test.svg',
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('should render lesson title', () => {
    render(<LessonCard lesson={mockLesson} onClick={mockOnClick} />);
    expect(screen.getByText('Test Lesson')).toBeInTheDocument();
  });

  it('should render lesson description', () => {
    render(<LessonCard lesson={mockLesson} onClick={mockOnClick} />);
    expect(screen.getByText('This is a test lesson')).toBeInTheDocument();
  });

  it('should display reading icon for reading lessons', () => {
    render(<LessonCard lesson={mockLesson} onClick={mockOnClick} />);
    expect(screen.getByText('📖')).toBeInTheDocument();
  });

  it('should display writing icon for writing lessons', () => {
    const writingLesson = { ...mockLesson, type: 'writing' as const };
    render(<LessonCard lesson={writingLesson} onClick={mockOnClick} />);
    expect(screen.getByText('✍️')).toBeInTheDocument();
  });

  it('should display difficulty level', () => {
    render(<LessonCard lesson={mockLesson} onClick={mockOnClick} />);
    expect(screen.getByText('beginner')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    render(<LessonCard lesson={mockLesson} onClick={mockOnClick} />);
    const card = screen.getByText('Test Lesson').closest('div');
    if (card?.parentElement) {
      card.parentElement.click();
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    }
  });

  it('should render with intermediate difficulty styling', () => {
    const intermediateLesson = { ...mockLesson, difficulty: 'intermediate' as const };
    render(<LessonCard lesson={intermediateLesson} onClick={mockOnClick} />);
    expect(screen.getByText('intermediate')).toBeInTheDocument();
  });

  it('should render with advanced difficulty styling', () => {
    const advancedLesson = { ...mockLesson, difficulty: 'advanced' as const };
    render(<LessonCard lesson={advancedLesson} onClick={mockOnClick} />);
    expect(screen.getByText('advanced')).toBeInTheDocument();
  });
});
