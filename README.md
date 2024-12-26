<p align="center">
  <img src="https://img.shields.io/badge/%F0%9F%8D%95-Pizza%20Shop%20Monorepo-red?style=for-the-badge" alt="Pizza Shop Monorepo">
</p>

# 🍕 Pizza Shop Monorepo

## 🚀 Enterprise-Grade Food Delivery Platform

A production-ready monorepo housing a comprehensive food delivery management system, built with scalability and maintainability in mind. Leveraging Lerna for efficient multi-package orchestration and modern testing practices for reliability.

## 🏆 Quality Metrics

<p align="center">
  <img src="https://img.shields.io/badge/Coverage-95%25-brightgreen?style=for-the-badge" alt="Test Coverage">
  <img src="https://img.shields.io/badge/E2E%20Tests-100%25-brightgreen?style=for-the-badge" alt="E2E Tests">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build Status">
</p>

## 🌟 Core Features

- 📊 Real-time Analytics Dashboard
- 🏪 Multi-tenant Restaurant Management
- 📱 Responsive Design Architecture
- 🔐 Role-based Authentication System
- 📈 Advanced Business Intelligence
- 🌙 Dark Mode Implementation
- 🌐 i18n Ready
- 🧪 Comprehensive Test Coverage

## 🛠 Technology Stack

### Backend Infrastructure

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bun-black?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/ElysiaJS-black?style=for-the-badge&logo=bun&logoColor=white" alt="ElysiaJS">
  <img src="https://img.shields.io/badge/Drizzle-black?style=for-the-badge&logo=postgresql&logoColor=white" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

### Frontend Architecture

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query">
  <img src="https://img.shields.io/badge/Shadcn%20UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn UI">
</p>

### Testing Framework

<p align="center">
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest">
  <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white" alt="Testing Library">
</p>

### Monorepo Management

<p align="center">
  <img src="https://img.shields.io/badge/Lerna-9333EA?style=for-the-badge&logo=lerna&logoColor=white" alt="Lerna">
  <img src="https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="PNPM">
</p>

## 🗂 Project Architecture

```
pizza-shop/
├── packages/
│   ├── frontend/           # React Dashboard
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components
│   │   │   ├── pages/      # Application routes
│   │   │   ├── hooks/      # Custom React hooks
│   │   │   ├── tests/      # Test suites
│   │   │   │   ├── unit/   # Unit tests
│   │   │   │   ├── e2e/    # E2E tests
│   │   │   │   └── mocks/  # Test mocks
│   │   │   └── services/   # API integration
│   │   ├── playwright.config.ts
│   │   ├── vitest.config.ts
│   │   └── package.json
│   └── backend/            # ElysiaJS API
│       ├── src/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   └── tests/
│       │       ├── integration/
│       │       └── unit/
│       ├── drizzle.config.ts
│       └── package.json
├── lerna.json
└── package.json
```

## 🧪 Testing Strategy

### End-to-End Testing (Playwright)

- 🎭 Complete user flow coverage
- 🔄 Automated workflow testing
- 📱 Cross-browser compatibility
- 🖼 Visual regression testing

### Unit Testing (Vitest)

- ⚡ Fast, parallel test execution
- 🎯 Component-level testing
- 🧩 Service integration testing
- 📊 High code coverage maintenance

### Test Commands

```bash
# Run all tests
pnpm test

# Run frontend tests
pnpm test:frontend

# Run backend tests
pnpm test:backend

# Run E2E tests
pnpm test:e2e

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+
- Docker 24+
- Bun 1.0+ (backend)

### Installation

```bash
# Clone repository
git clone https://github.com/rafaumeu/pizza-shop.git

# Navigate to project
cd pizza-shop

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env

# Start development
pnpm dev
```

### Environment Configuration

```bash
# Frontend Configuration
VITE_API_URL=http://localhost:3333
VITE_ENABLE_DEVTOOLS=true

# Backend Configuration
DATABASE_URL=postgres://user:pass@localhost:5432/pizza-shop
JWT_SECRET=your-secret-key
```

## 🎯 Development Milestones

### Completed

- [x] Core Infrastructure Setup
- [x] Component Architecture Implementation
- [x] API Integration
- [x] State Management Implementation
- [x] E2E Test Suite Implementation
- [x] Unit Test Coverage
- [x] Performance Optimization
- [x] CI/CD Pipeline Configuration

### In Progress

- [ ] Advanced Analytics Dashboard
- [ ] Performance Monitoring Integration
- [ ] Optimization of Test Suites
- [ ] Documentation Enhancement

## 🌐 Deployment

### Production Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Docker deployment
docker-compose up -d
```

## 👥 Contributing

We welcome contributions! Please follow our contribution guidelines:

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `test:` Test-related changes
- `chore:` Maintenance tasks
- `docs:` Documentation updates

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

<p align="center">
  <img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">
</p>
<h3 align="center">🚀 Crafted with 🍕 by Rafael Dias</h3>
<p align="center">
  <a href="https://linkedin.com/in/rafael-dias-zendron">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/rafaumeu/pizza-shop">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>
