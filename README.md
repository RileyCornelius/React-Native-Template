# React Native Expo Template

A modern React Native Expo template with Unistyles theming, pre-built UI components.

## ✨ Features

- **Expo SDK 54** with New Architecture enabled
- **React Native 0.81** with React 19
- **TypeScript** with strict mode
- **Expo Router** for file-based navigation
- **Unistyles 3** for theming and styling (light/dark mode)
- **Craft UI Components** - 20+ pre-built, customizable components
- **Jotai** for atomic state management
- **Moti + Reanimated** for smooth animations
- **MMKV** for fast persistent storage
- **ESLint + Prettier** pre-configured

## 🛠 Tech Stack

| Category   | Technology                     |
| ---------- | ------------------------------ |
| Framework  | Expo SDK 54, React Native 0.81 |
| Language   | TypeScript 5.9                 |
| Routing    | Expo Router 6                  |
| Styling    | react-native-unistyles 3       |
| State      | Jotai                          |
| Storage    | react-native-mmkv              |
| Animations | Moti, Reanimated 4             |
| Gestures   | react-native-gesture-handler   |
| Images     | expo-image                     |
| Lists      | @shopify/flash-list            |
| HTTP       | Axios                          |
| Icons      | @expo/vector-icons             |
| Fonts      | Space Grotesk                  |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (required for Expo)
- [Bun](https://bun.sh/) (recommended) or npm/yarn
- [Expo](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (Mac) or [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Installation

1. **Clone or use this template**

   ```bash
   # Clone the repository
   git clone https://github.com/your-username/expo-unistyle-craft-template.git my-app
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Generate native projects**

   ```bash
   bun run prebuild
   ```

4. **Start the development server**

   ```bash
   # Run on Android
   bun run android

   # Run on iOS
   bun run ios

   # Run on Web
   bun run web
   ```

## 📁 Project Structure

```text
src/
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx         # Root layout with navigation
│   ├── index.tsx           # Home screen (/)
│   ├── details.tsx         # Details screen (/details)
│   └── +not-found.tsx      # 404 screen
├── components/
│   ├── craft-ui/           # Pre-built UI components
│   │   ├── Avatar/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── Switch/
│   │   └── ...
│   └── ui/                 # Custom/extended components
├── store/                  # Jotai atoms (state management)
└── themes/                 # Unistyles theme configuration
    ├── breakpoints.ts
    ├── colors.ts
    ├── fonts.ts
    ├── radius.ts
    ├── spacing.ts
    ├── theme.ts
    └── unistyles.ts
assets/
├── fonts/                  # Custom fonts
└── images/                 # App icons, splash screen
```

## 📜 Available Scripts

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `bun run start`    | Start dev server with dev client |
| `bun run android`  | Run on Android device/emulator   |
| `bun run ios`      | Run on iOS simulator             |
| `bun run web`      | Run on web browser               |
| `bun run prebuild` | Generate native projects (clean) |
| `bun run tsc`      | Type check without emitting      |
| `bun run lint`     | Check for linting errors         |
| `bun run format`   | Auto-fix linting and formatting  |
| `bun run fix`      | Fix Expo dependency versions     |
| `bun run doctor`   | Run Expo doctor diagnostics      |

### Theme Structure

The theme provides consistent design tokens:

- `theme.colors` - Color palette (adapts to light/dark)
- `theme.spacing` - Spacing scale (xs, sm, md, lg, xl)
- `theme.radius` - Border radius values
- `theme.fonts` - Font families

## 🧩 Components

### Craft UI Components

Pre-built, production-ready components in `src/components/craft-ui/`:

- **Avatar** - User profile images
- **Button** - Primary action buttons
- **ButtonRound** - Circular icon buttons
- **Card** - Content containers
- **Checkbox** - Selection controls
- **Switch** - Toggle switches
- **Slider** / **SliderDual** - Range inputs
- **Radio** - Radio buttons
- **InputText** / **InputSearch** / **InputOTP** - Text inputs
- **BottomSheet** - Modal sheets
- **ContextMenu** - Long-press menus
- **ListItem** - List row items
- **Divider** - Visual separators
- **PhotoCarousel** - Image galleries
- **PasscodeEntry** - PIN input
- **Counter** - Increment/decrement
- **Text** - Themed typography

## 📱 Building for Production

### EAS Build

```bash
# Install EAS CLI
bun add -g eas-cli

# Configure EAS
eas build:configure

# Build for Android
eas build --profile development --platform android

# Build for iOS
eas build --profile development --platform ios

# Build locally for Android
expo run:android

# Build locally for iOS
expo run:ios
```
