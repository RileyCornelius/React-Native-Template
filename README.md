# React Native Expo Template

A React Native Expo template with Unistyles theming, pre-built UI components.

## 🛠 Tech Stack

| Category   | Technology                     |
| ---------- | ------------------------------ |
| Framework  | Expo SDK 54, React Native 0.81 |
| Language   | TypeScript                     |
| Routing    | Expo Router 6                  |
| Styling    | react-native-unistyles 3       |
| State      | Jotai                          |
| Storage    | react-native-mmkv              |
| Animations | Moti, Reanimated 4             |
| Gestures   | react-native-gesture-handler   |
| Images     | expo-image                     |
| HTTP       | Axios                          |
| Icons      | @expo/vector-icons             |
| Fonts      | @expo-google-fonts             |
| Components | Craft UI 20+ pre-built         |
| Lint       | ESLint                         |
| Format     | Prettier                       |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24 (required for Expo)
- [Bun](https://bun.sh/) (recommended) or npm/yarn
- [Expo](https://docs.expo.dev/get-started/installation/)
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) or [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (Mac only)

## For Windows with Android Emulator

Follow the this guide: [Setup your Environment](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&platform=android&device=simulated&buildEnv=local)

1. Make sure that `Android Emulator` and `Development Build` are selected
2. 


### Installation

1. **Clone or use this template**

   ```bash
   # Clone the repository
   git clone https://github.com/RileyCornelius/React-Native-Template.git my-app
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Check installation**

   ```bash
   bun expo-install
   bun doctor
   ```

4. **Generate native projects**

   ```bash
   bun prebuild
   ```

5. **Start the development server**

   ```bash
   # Run on Android
   bun android

   # Run on iOS
   bun ios

   # Run on Web
   bun web
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
│   └── ui/                 # Custom/extended components
├── store/                  # Jotai atoms (state management)
└── themes/                 # Unistyles theme configuration
assets/
├── fonts/                  # Custom fonts
└── images/                 # App icons, splash screen, etc
```

## 📜 Available Scripts

| Command                 | Description                         |
| ----------------------- | ----------------------------------- |
| `bun run start`         | Start dev server with dev client    |
| `bun run android`       | Run locally Android device/emulator |
| `bun run android:build` | Builds for android using eas        |
| `bun run ios`           | Run on iOS simulator                |
| `bun run web`           | Run on web browser                  |
| `bun run prebuild`      | Generate native projects (clean)    |
| `bun run tsc`           | Type check without emitting         |
| `bun run lint`          | Check for linting errors            |
| `bun run format`        | Auto-fix linting and formatting     |
| `bun run expo-install`  | Fix Expo dependency versions        |
| `bun run doctor`        | Run Expo doctor diagnostics         |

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

## Installing Packages

```bash
npx expo install <package-name>
```

## 📱 Building for Production

### EAS Build

```bash
# Install EAS CLI
npm install --global eas-cli

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
