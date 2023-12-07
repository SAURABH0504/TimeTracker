# Time Tracker

A react-native time tracking application build using expo-cli.

## How it works

![](https://github.com/SAURABH0504/TimeTracker/blob/main/assets/gif/TimeTracker.gif)

## Installation

- git clone https://github.com/SAURABH0504/TimeTracker.git
- cd TimeTracker
- yarn
- npx run start

## Steps To Run Expo App

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm

npx expo start

# OR using Yarn
yarn  expo start
```

### Step 2: Start your Application

Once the development server is running, the easiest way to launch the app is on a physical device with Expo Go. For more information, see https://docs.expo.dev/get-started/create-a-project/#open-the-app-on-your-device.

### Step 3: Open the app on your device

To open the app your device that has Expo Go already installed:

On your Android device, press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
On your iPhone or iPad, open the default Apple Camera app and scan the QR code you see in the terminal.
You can open the project on multiple devices simultaneously. Go ahead and try it on both phones at the same time if you have them handy.

## Summary

- Created application using React Native Expo v49.0.13.
- Implemented functional components and hooks as per the requirement.
- Created reusable components.
- Integrated Redux Toolkit for state management.
- Used React Navigation library for transition between screens.

## Structure

```
 ./src/
├── assets
│   ├── HomeIcon.tsx
│   ├── StartIcon.tsx
│   ├── StopIcon.tsx
│   └── index.ts
├── color
│   └── index.ts
├── common
│   └── PlayPauseButton.tsx
├── components
│   └── modules
│       └── Home
│           ├── HomeScreen.tsx
│           ├── components
│           │   └── ProjectTile.tsx
│           └── index.ts
├── hooks
│   └── useContactList.ts
├── navigation
│   ├── RootNavigator.tsx
│   ├── actions.ts
│   └── constants.ts
├── store
│   ├── index.ts
│   └── slices
│       ├── projectsSlice.ts
│       └── timerSlice.ts
└── utils
    └── index.ts

```

- `assets`: It contains all types of raw assets like svgs, png images.
- `color`: It contains theme color codes which is required in project.
- `components`: It contains global level components like custom Text, Button, UI which are used throughout the application.
- `modules`: It contains module which are required in code.
- `hooks` : It contains custom hooks to seprate business logic.
- `navigation` : It contains stack of screens.
- `service` : It contains api services to send and fetch data from server.
- `store` : It contains redux store to update state and update as per requirements.
- `utils` : It contains common methods and constants.

## Development

- `Project Structure`: Used module wise directory structure as this makes code more readable.
- `Navigation flow`: Used react-navigation to create a single navigator for the app.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.
- `Orientation`: Used portrait orientation.