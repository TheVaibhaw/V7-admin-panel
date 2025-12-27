# Contributing to v7 Admin Panel

Thank you for your interest in contributing to v7 Admin Panel! This document provides guidelines for contributing to this project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details (OS, browser, Node version)

### Suggesting Features

Feature requests are welcome! Please provide:
- Clear use case
- Expected behavior
- Why this feature would be useful
- mockups or examples if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the existing code style
   - Write clean, readable code
   - Add comments for complex logic
   - Ensure TypeScript types are properly defined

4. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
   Use conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting
   - `refactor:` for code refactoring
   - `test:` for tests
   - `chore:` for maintenance

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes

## 📋 Code Standards

- **TypeScript**: Use proper types, avoid `any`
- **React**: Use functional components and hooks
- **Naming**: Use descriptive names (camelCase for variables, PascalCase for components)
- **Formatting**: Code will be formatted with Prettier (if configured)
- **Comments**: Add JSDoc comments for complex functions
- **Performance**: Optimize renders, avoid unnecessary re-renders

## 🎨 UI/UX Guidelines

- Maintain consistency with existing design
- Use the defined color palette (#0F2854 primary, #1C4D8D secondary)
- Ensure responsive design (mobile, tablet, desktop)
- Add smooth animations with Framer Motion
- Ensure accessibility (ARIA labels, keyboard navigation)

## 🏗️ Project Structure

```
v7-admin-panel/
├── app/              # Next.js pages and routes
├── components/       # Reusable components
│   ├── layouts/     # Layout components
│   ├── ui/          # UI components
│   └── dashboard/   # Dashboard components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
└── types/           # TypeScript types
```

## ✅ Checklist Before Submitting PR

- [ ] Code builds without errors (`npm run build`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] All TypeScript types are properly defined
- [ ] Changes are responsive on all screen sizes
- [ ] Accessibility standards are met
- [ ] Code follows project conventions
- [ ] Commits follow conventional commits format
- [ ] PR description is clear and complete

## 🙏 Thank You!

Your contributions make this project better for everyone!

---

**Maintainer:** Vaibhaw Kumar Parashar  
**Website:** [https://vaibhawkumarparashar.in](https://vaibhawkumarparashar.in)
