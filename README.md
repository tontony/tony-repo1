# English Learning Adventure 📚

An interactive K-12 English Reading and Writing tutorial app designed for students, with special features for ADHD and Autism learners.

## Features ✨

- **Interactive Lessons**: Engaging reading and writing lessons for different grade levels
- **Visual Learning**: Colorful illustrations and animations to support visual learners
- **Audio Support**: Sound effects and audio feedback to enhance engagement
- **Adaptive Difficulty**: Beginner, intermediate, and advanced levels
- **Modern UI**: Colorful, modern design with smooth animations
- **Accessible**: Designed with ADHD and Autism students in mind
- **Standalone**: Runs completely offline once installed

## Technology Stack 🛠️

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Modern styling
- **Jest** - Testing framework
- **Node.js** - Runtime environment

## Prerequisites 📋

- Node.js 18.x or higher
- npm 9.x or higher

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/tontony/tony-repo1.git
   cd tony-repo1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts 📝

- `npm run dev` - Start development server (hot reload enabled)
- `npm run build` - Build production-ready application
- `npm start` - Run production server (requires `npm run build` first)
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

## Running Tests ✅

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

All tests should pass successfully. The app includes comprehensive unit tests for:
- Data utilities
- UI components
- User interactions

## Building for Production 🏗️

```bash
# Build the application
npm run build

# Start production server
npm start
```

The production build will be optimized and ready for deployment on any operating system.

## Cross-Platform Support 🖥️

This application works on:
- **Windows** - Windows 10/11
- **macOS** - 10.15 (Catalina) or later
- **Linux** - Any modern distribution with Node.js support

## Project Structure 📁

```
tony-repo1/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── LessonCard.tsx     # Lesson card component
│   ├── LessonModal.tsx    # Lesson modal component
│   └── FilterBar.tsx      # Filter controls
├── lib/                   # Utility libraries
│   ├── data.ts           # Lesson data and utilities
│   └── sound.ts          # Sound effects utilities
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types
├── public/               # Static assets
│   └── images/           # Lesson images
├── __tests__/            # Test files
│   ├── data.test.ts
│   ├── LessonCard.test.tsx
│   └── FilterBar.test.tsx
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Features for ADHD/Autism Students 🌈

1. **Visual Feedback**: 
   - Bright, engaging colors
   - Large, easy-to-read text
   - Clear visual hierarchy

2. **Audio Feedback**:
   - Sound effects on interactions
   - Success/completion sounds
   - Audio cues for engagement

3. **Clear Structure**:
   - Simple navigation
   - Consistent layout
   - Easy-to-understand categories

4. **Engagement**:
   - Interactive elements
   - Immediate feedback
   - Rewards for completion

## Lesson Types 📖

### Reading Lessons
- Vowel recognition
- Rhyming words
- Adjectives and descriptive language

### Writing Lessons
- Sentence structure
- Story writing
- Poetry creation

## Difficulty Levels 🎯

- **Beginner**: Basic concepts (vowels, simple sentences)
- **Intermediate**: More complex topics (story structure, adjectives)
- **Advanced**: Creative writing (poetry, advanced composition)

## Customization 🎨

To add new lessons, edit `/lib/data.ts`:

```typescript
{
  id: 'new-lesson-id',
  title: 'Lesson Title',
  description: 'Brief description',
  type: 'reading' | 'writing',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  content: 'Lesson content...',
  imageUrl: '/images/your-image.svg',
  soundUrl: '/sounds/your-sound.mp3',
}
```

## Browser Support 🌐

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance ⚡

- Fast page loads with Next.js
- Optimized images
- Minimal JavaScript bundle
- Responsive design

## Accessibility ♿

- Keyboard navigation support
- Screen reader compatible
- High contrast colors
- Clear focus indicators

## Troubleshooting 🔧

### App won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tests failing
```bash
# Clear Jest cache
npm test -- --clearCache
npm test
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Contributing 🤝

This is an educational project. Feel free to fork and customize for your needs!

## License 📄

This project is open source and available for educational purposes.

## Support 💬

For questions or issues, please create an issue in the GitHub repository.

## Acknowledgments 🙏

Built with ❤️ for students with diverse learning needs.

---

**Made with care for K-12 learners, especially those with ADHD and Autism** 🌟
