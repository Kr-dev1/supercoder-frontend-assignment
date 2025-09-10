# SuperCoder - React Frontend Development Assignment

A responsive web application built with React, TypeScript, and Tailwind CSS following Atomic Design principles and Feature-Based Architecture.

## 🚀 Live Demo

[Deploy your application and add the live URL here]

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Implementation Details](#implementation-details)
- [Architecture Decisions](#architecture-decisions)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

## 🎯 Project Overview

This project is a responsive web application implementing a shopping/e-commerce interface based on the provided Figma design. The application follows modern React development practices with a focus on component reusability, type safety, and maintainable architecture.

### Key Features

- **Responsive Design**: Mobile-first approach supporting mobile, tablet, and desktop viewports
- **Component Architecture**: Atomic Design pattern with Feature-Based Architecture
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Routing**: Client-side routing with React Router DOM
- **Static Data**: UI implementation with dummy data (no server integration)

## 🛠 Tech Stack

### Core Dependencies

- **React**: ^19.1.1 - UI library
- **React DOM**: ^19.1.1 - DOM rendering
- **React Router**: ^7.8.1 - Client-side routing
- **TypeScript**: ~5.8.3 - Type safety
- **Tailwind CSS**: ^4.1.12 - Utility-first CSS framework
- **Vite**: ^7.1.2 - Build tool and development server

### Utility Libraries

- **clsx**: ^2.1.1 - Conditional class name utility
- **tailwind-merge**: ^3.3.1 - Tailwind CSS class conflict resolution
- **pretendard**: ^1.3.9 - Korean web font

### Development Tools

- **ESLint**: ^9.33.0 - Code linting
- **TypeScript ESLint**: ^8.39.1 - TypeScript-specific linting rules
- **Prettier**: Code formatting (configured but not in dependencies)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd supercoder
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## 🏗 Project Structure

The project follows **Feature-Based Architecture (FBA)** combined with **Atomic Design** principles:

```
src/
├── features/                    # Business feature modules
│   ├── auth/                   # Authentication feature
│   │   ├── components/
│   │   │   ├── atoms/          # Basic building blocks
│   │   │   │   ├── AuthInput.tsx
│   │   │   │   └── CopyRight.tsx
│   │   │   ├── molecules/      # Component combinations
│   │   │   │   └── LoginForm.tsx
│   │   │   └── organism/       # Complex components
│   │   │       └── Login.tsx
│   │   └── types/
│   │       └── auth.ts
│   └── shop/                   # Shopping feature
│       ├── components/
│       │   ├── atoms/          # Basic UI elements
│       │   │   ├── Banner.tsx
│       │   │   ├── Chat.tsx
│       │   │   ├── Footer.tsx
│       │   │   ├── HeroText.tsx
│       │   │   ├── NavLink.tsx
│       │   │   ├── NavLogo.tsx
│       │   │   ├── NavOptions.tsx
│       │   │   ├── ProductCard.tsx
│       │   │   └── SlectedItemsCard.tsx
│       │   ├── molecules/      # Component combinations
│       │   │   ├── NavbarMenu.tsx
│       │   │   ├── ProductDisplay.tsx
│       │   │   └── SelectedItems.tsx
│       │   └── organisms/      # Complex page sections
│       │       └── Home.tsx
│       └── types/
│           └── type.ts
├── pages/                      # Page components (routing targets)
│   ├── HomePage.tsx
│   └── LoginPage.tsx
├── routes/                     # Routing configuration
│   ├── router.tsx              # Main router component
│   └── route.ts               # Route path constants
└── shared/                     # Shared modules (reusable across features)
    ├── componets/             # Reusable components
    │   └── atoms/
    │       ├── BasicButton.tsx
    │       └── BasicInput.tsx
    ├── types/                 # Common type definitions
    │   ├── buttonTypes.ts
    │   └── types.ts
    └── utils/                 # Utility functions
        └── classNameMerge.ts
```

## 🔧 Implementation Details

### 1. Routing Configuration

The application uses React Router DOM for client-side routing:

```tsx
// routes/route.ts
export const ROUTES = {
  LOGIN: "/",
  REGISTER: "/register", 
  HOME: "/home",
} as const;

// routes/router.tsx
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2. Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **No Inline Styles**: All styling through Tailwind classes
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Class Merging**: Custom utility for handling Tailwind class conflicts

```tsx
// shared/utils/classNameMerge.ts
export default function classNameMerge(
  classes: (string | undefined | false | null)[]
): string {
  return twMerge(clsx(classes));
}
```

### 3. State Management

- **Local State**: React hooks for component-level state
- **No Global State**: Simple state management without external libraries
- **Static Data**: Dummy data for UI implementation

### 4. Authentication Flow

The login feature includes:
- Form validation
- Loading states
- Error handling
- Navigation after successful login

```tsx
// features/auth/components/organism/Login.tsx
const handleLogin = async (data: LoginFormData) => {
  setIsLoading(true);
  setError('');
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (data.email && data.password) {
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  } catch (err) {
    setError('An error occurred. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

## 🏛 Architecture Decisions

### 1. Feature-Based Architecture (FBA)

**Decision**: Organize code by business features rather than technical layers.

**Rationale**: 
- Better code organization for large applications
- Easier to locate feature-specific code
- Improved maintainability and scalability
- Clear separation of concerns

### 2. Atomic Design Pattern

**Decision**: Structure components in atoms, molecules, and organisms.

**Rationale**:
- Promotes component reusability
- Clear hierarchy of component complexity
- Easier to maintain and test
- Consistent design system

### 3. TypeScript Implementation

**Decision**: Full TypeScript implementation with strict type checking.

**Rationale**:
- Better developer experience with IntelliSense
- Catch errors at compile time
- Improved code documentation
- Better refactoring support

### 4. Tailwind CSS

**Decision**: Use Tailwind CSS for styling instead of CSS modules or styled-components.

**Rationale**:
- Rapid development with utility classes
- Consistent design system
- Better performance with purging unused styles
- Easy responsive design implementation

### 5. Static Data Implementation

**Decision**: Use dummy data instead of real API integration.

**Rationale**:
- Focus on UI implementation as per assignment requirements
- Faster development without backend dependencies
- Easier testing and demonstration
- Clear separation of frontend concerns

## 📜 Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build

# Code Quality
yarn lint         # Run ESLint
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure SPA Routing**
   - Add `vercel.json` for 404 redirect:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

### Netlify Deployment

1. **Build the project**
   ```bash
   yarn build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `yarn build`
   - Set publish directory: `dist`

3. **Configure SPA Routing**
   - Add `_redirects` file in `public` folder:
   ```
   /*    /index.html   200
   ```

## 📝 Notes

- **AI Usage**: AI tools were used for development assistance while maintaining code quality standards
- **No External UI Libraries**: Built with custom components following design system principles
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: Basic accessibility considerations implemented (excluded from evaluation scope)
- **Performance**: Optimized bundle size with Vite's tree-shaking and code splitting

## 🤝 Contributing

This is an assignment project. For any questions or clarifications, please refer to the project guidelines and requirements.

---

**Assignment Duration**: 1-2 days  
**Focus**: UI implementation with static data  
**Evaluation Criteria**: Code quality, architecture, UI/UX implementation, functionality