import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '@/components/FilterBar';

describe('FilterBar', () => {
  const mockOnTypeChange = jest.fn();
  const mockOnDifficultyChange = jest.fn();

  beforeEach(() => {
    mockOnTypeChange.mockClear();
    mockOnDifficultyChange.mockClear();
  });

  it('should render type filter buttons', () => {
    render(
      <FilterBar
        selectedType="all"
        selectedDifficulty="all"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    expect(screen.getByText(/📖 Reading/)).toBeInTheDocument();
    expect(screen.getByText(/✍️ Writing/)).toBeInTheDocument();
  });

  it('should render difficulty filter buttons', () => {
    render(
      <FilterBar
        selectedType="all"
        selectedDifficulty="all"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    expect(screen.getByText(/Beginner/)).toBeInTheDocument();
    expect(screen.getByText(/Intermediate/)).toBeInTheDocument();
    expect(screen.getByText(/Advanced/)).toBeInTheDocument();
  });

  it('should call onTypeChange when type button is clicked', () => {
    render(
      <FilterBar
        selectedType="all"
        selectedDifficulty="all"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    const readingButton = screen.getByText(/Reading/);
    fireEvent.click(readingButton);
    expect(mockOnTypeChange).toHaveBeenCalledWith('reading');
  });

  it('should call onDifficultyChange when difficulty button is clicked', () => {
    render(
      <FilterBar
        selectedType="all"
        selectedDifficulty="all"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    const beginnerButton = screen.getByText(/Beginner/);
    fireEvent.click(beginnerButton);
    expect(mockOnDifficultyChange).toHaveBeenCalledWith('beginner');
  });

  it('should highlight selected type', () => {
    render(
      <FilterBar
        selectedType="reading"
        selectedDifficulty="all"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    const readingButton = screen.getByText(/Reading/);
    expect(readingButton.className).toContain('from-blue-500');
  });

  it('should highlight selected difficulty', () => {
    render(
      <FilterBar
        selectedType="all"
        selectedDifficulty="beginner"
        onTypeChange={mockOnTypeChange}
        onDifficultyChange={mockOnDifficultyChange}
      />
    );

    const beginnerButton = screen.getByText(/Beginner/);
    expect(beginnerButton.className).toContain('from-green-500');
  });
});
