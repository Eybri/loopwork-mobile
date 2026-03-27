# LoopWork Mobile Frontend Structure

This document outlines the directory structure for the LoopWork React Native (Expo) application. The project follows a modular, feature-based organization to ensure scalability and maintainability.

## Directory Tree

```text
src/
├── api/             # API clients, axios interceptors, and data fetching logic
├── assets/          # Static assets (images, icons, fonts)
├── components/      # Reusable UI components
│   ├── common/      # Basic UI elements (Buttons, Inputs, Cards)
│   └── layout/      # Layout components (SafeArea, Containers, Headers)
├── constants/       # App-wide constants, configuration, and API endpoints
├── context/         # React Context providers (Auth, Theme, Settings)
├── hooks/           # Custom reusable React hooks
├── navigation/      # React Navigation configuration and stack definitions
├── screens/         # Full-screen components organized by feature
│   ├── auth/        # Login, Register, Forgot Password
│   └── main/        # Dashboard, Profile, Settings
├── theme/           # Design system tokens (Colors, Typography, Spacing)
├── types/           # TypeScript interfaces and type definitions
└── utils/           # Helper functions and utility classes
```

## Folder Descriptions

### `src/api/`
Houses all network-related code. This includes `axios` instance configuration, endpoint definitions, and service-specific api calls.

### `src/components/`
- **common/**: Generic, atomic components that are used throughout the app.
- **layout/**: Higher-level components that define the structure of the UI.

### `src/navigation/`
Contains the navigation logic using `@react-navigation/native`. This is where stacks, tabs, and drawers are defined.

### `src/screens/`
Each subdirectory within `screens/` represents a major feature or flow. Screens are typically connected to the state or data fetching logic.

### `src/theme/`
Centralized design system. All colors, font sizes, and spacing should be pulled from here to maintain visual consistency.

### `src/types/`
Global TypeScript definitions, specifically for API responses, navigation parameters, and shared entity models.
