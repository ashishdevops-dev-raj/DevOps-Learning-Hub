# Contributing to DevOps Learning Hub

Thank you for your interest in contributing to the DevOps Learning Hub! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/devops-learning-hub.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

See the main [README.md](README.md) for setup instructions.

## Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Adding New Content

### Adding a New Topic

1. Create a new page in `frontend/app/topics/[topic-name]/page.tsx`
2. Add the topic to the topics list in `frontend/app/page.tsx` and `frontend/app/topics/page.tsx`
3. Include:
   - Clear explanations
   - Code examples with syntax highlighting
   - Best practices
   - Common use cases

### Adding Interview Questions

Add questions to `frontend/app/interview/page.tsx` following the existing format.

## Testing

Before submitting a PR:

- [ ] Code runs without errors
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Docker containers start correctly (`docker-compose up`)

## Pull Request Process

1. Update the README.md if needed
2. Update documentation for new features
3. Ensure all tests pass
4. Request review from maintainers

## Questions?

Open an issue for questions or discussions.

Thank you for contributing! 🎉

