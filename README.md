# React Native Expo Template

A React Native Expo template with Unistyles theming, Jotai state management, and 20+ pre-built UI components.

## 🛠 Tech Stack

| Category   | Technology                                                                             |
| ---------- | -------------------------------------------------------------------------------------- |
| Framework  | Expo SDK 54, React 19.1, React Native 0.81 (New Architecture & React Compiler enabled) |
| Language   | TypeScript 5.9                                                                         |
| Routing    | Expo Router 6 (File-based, Typed)                                                      |
| Styling    | react-native-unistyles 3 (Theming & Responsive styles)                                 |
| State      | Jotai (Atomic state)                                                                   |
| Storage    | react-native-mmkv (High-performance persistent storage)                                |
| Animations | Reanimated 4, Moti                                                                     |
| Gestures   | react-native-gesture-handler 2                                                         |
| Keyboard   | react-native-keyboard-controller                                                       |
| Media      | expo-image, expo-video, expo-blur                                                      |
| Icons      | @expo/vector-icons (Ionicons)                                                          |
| Utils      | neverthrow (Result type), TanStack Query (Data fetching), React Pacer                  |
| Components | Craft UI (20+ pre-built modular components)                                            |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24+ (required for Expo)
- [Bun](https://bun.sh/) (recommended)
- [Expo Go](https://expo.dev/go) or [Development Build](https://docs.expo.dev/development/introduction/)
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) or [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)

### Installation

1. **Clone the template**

   ```bash
   git clone https://github.com/RileyCornelius/React-Native-Template.git my-app
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Check installation**

   ```bash
   bun run doctor
   ```

4. **Generate native projects (Required for some packages)**

   ```bash
   bun run prebuild
   ```

5. **Start the development server**

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
├── app/              # Expo Router screens (file-based routing)
│   ├── (tabs)/       # Main tab navigation
│   ├── _layout.tsx   # Root layout with providers
│   └── settings.tsx  # Example screen
├── components/
│   ├── common/       # Shared business components
│   ├── craft-ui/     # Modular, production-ready UI components
│   └── ui/           # Project-specific UI overrides
├── constants/        # Shared constants & atom keys
├── hooks/            # Custom React hooks
├── services/         # API clients & local storage (MMKV)
├── store/            # Jotai atoms for state management
├── theme/            # Unistyles configuration & theme tokens
└── types/            # Shared TypeScript definitions
assets/
└── images/           # App icons, splash screen, etc.
```

## 📜 Available Scripts

| Command               | Description                               |
| --------------------- | ----------------------------------------- |
| `bun run start`       | Start dev server with dev client          |
| `bun run android`     | Run locally on Android device/emulator    |
| `bun run ios`         | Run locally on iOS simulator              |
| `bun run web`         | Run on web browser                        |
| `bun run prebuild`    | Generate native projects (clean prebuild) |
| `bun run tsc`         | Type check the project                    |
| `bun run lint`        | Check for linting errors                  |
| `bun run format`      | Auto-fix linting and formatting           |
| `bun run install-fix` | Fix Expo dependency versions              |
| `bun run doctor`      | Run Expo doctor diagnostics               |
| `bun run clean`       | Remove build artifacts and node_modules   |

## 🎨 Theme & Styling

This project uses **react-native-unistyles** for theming.

- **Tokens**: Defined in `src/theme/`, including `colors`, `spacing`, `radius`, `fonts`, and `breakpoints`.
- **Adaptive**: Supports Light/Dark themes and system preference.
- **Usage**:
  ```tsx
  const stylesheet = StyleSheet.create((theme) => ({
  	container: {
  		flex: 1,
  		backgroundColor: theme.colors.background,
  		padding: theme.spacing.md,
  	},
  }));
  ```

## 🧩 Craft UI Components

A collection of pre-built, highly customizable components located in `src/components/craft-ui/`:

- **Layout**: `HStack`, `VStack`, `Center`, `Divider`
- **Feedback**: `Badge`, `BottomSheet`, `ContextMenu`, `Modal`
- **Inputs**: `Button`, `ButtonRound`, `Checkbox`, `Radio`, `Switch`, `Slider`, `SliderDual`, `InputText`, `InputSearch`, `InputOTP`, `Counter`, `PasscodeEntry`
- **Display**: `Avatar`, `Card`, `ListItem`, `Text`, `PhotoCarousel`
- **Interactions**: `PressableScale`

## 📦 State Management

- **Jotai**: Used for atomic, decoupled state management. Atoms are located in `src/store/`.
- **MMKV**: High-performance persistent storage integrated with Jotai using `atomWithMMKV`.

## 📱 Building for Production

### EAS Build

```bash
# Install EAS CLI
npm install --global eas-cli

# Configure EAS
eas build:configure

# Build for development/production
eas build --platform android
eas build --platform ios

# Run development build
eas build:run --profile development --platform android --latest
eas build:run --profile development --platform ios --latest
```
