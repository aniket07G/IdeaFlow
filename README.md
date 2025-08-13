# ✅FlowIdea — Startup Idea Sharing & Voting App
### FlowIdea is a mobile app where users can share their startup ideas, get instant fun AI-generated ratings, vote on others’ ideas, and compete to appear on a leaderboard.


# 💡 App Description

**FlowIdea is a fun and interactive mobile app that lets users:**

- Submit their startup ideas  
- Get instant AI-generated feedback ratings  
- Vote on others’ ideas  
- Compete on a leaderboard showcasing the best ideas  

The app is designed to foster creativity, encourage friendly competition, and help users discover promising startup concepts — all within an intuitive and beautifully designed interface.

# 🖼️ Screenshots

<p align="center">
  <img src="https://i.ibb.co/xqwM94fV/Screenshot-20250811-114136-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/bMRJVgGc/Screenshot-20250811-114149-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/r1THYgh/Screenshot-20250811-114159-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/P2bdyWW/Screenshot-20250811-114256-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/hR7s0kd2/Screenshot-20250811-114328-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/67hh0g8w/Screenshot-20250811-114341-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/VpMCN3c9/Screenshot-20250811-114354-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/7JtDDPQJ/Screenshot-20250811-114409-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/k2Gky1JC/Screenshot-20250811-114418-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/XZsMXrcK/Screenshot-20250811-114436-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/C5CLYGH5/Screenshot-20250811-114441-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/hJH1qvtC/Screenshot-20250811-114453-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/d43v3qVY/Screenshot-20250813-095704-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  <img src="https://i.ibb.co/fVCbT50Z/Screenshot-20250813-095715-Idea-Flow.jpg" width="280" style="margin: 10px;" />
  
</p>

# 📌 Tech Stack Used

| Technology                         | Description                                              |
|----------------------------------|----------------------------------------------------------|
| **React Native (0.80.2)**         | Core framework for building the mobile app               |
| **React (19.1.0)**                | JavaScript library for building user interfaces          |
| **React Navigation**              | (`@react-navigation/native`, `@react-navigation/native-stack`) for managing navigation and screen transitions |
| **AsyncStorage**                  | (`@react-native-async-storage/async-storage`) for local persistent storage of ideas and votes |
| **React Native Gesture Handler** | Enhanced gesture support for smooth interactions         |
| **React Native Reanimated**       | For performant animations and transitions                 |
| **React Native Linear Gradient** | For attractive gradient backgrounds and UI effects       |
| **React Native Vector Icons**    | Scalable and customizable icons                           |
| **Notifee**                      | (`@notifee/react-native`) Push notifications support      |
| **Safe Area Context & Screens**  | For safe area support and optimized screen management     |
| **React Native Worklets**        | Enables animations on UI thread for smooth performance    |
| **React Native Respix**          | Responsive pixel sizing utility across devices            |


## ✨ Features Implemented

- 📤 **Submit Startup Ideas**  
  Users can submit their startup ideas with the following details:  
  - Name  
  - Tagline  
  - Description  

- 👍 **Voting System**  
  Each user can upvote  any idea. Votes are updated in real time.

- 🏆 **Leaderboard Screen**  
  Displays the top 2 **AI-rated ideas** to highlight the best submissions.

- 🔔 **Notifications**  
  Users receive notifications based on their submissions and updates.

- 📝 **Filtering Ideas**  
  Filter submitted ideas based on **ratings** or **votes**.

- 🎨 **Custom Fonts**  
  The app supports custom fonts for a polished UI experience.

- ⚡ **Smooth Animations** *(via react-native-worklets & reanimated)*  
  Fluid UI interactions and transitions for a better user experience.

- 🖤 **Dark Theme Support**  
  A clean, black-themed design for better readability and aesthetics.




# 🚀 Setup Instructions

This guide walks you through setting up the **IdeaFlow React Native project**, installing dependencies, and handling common issues.

  



  

## 📌 1️⃣ Create a New React Native Project

To set up the project, run the following command:

  

```sh

npx @react-native-community/cli init ProjectName

```

  

This will initialize a new React Native project named **ProjectName**.

  

Once the installation is complete, navigate into the project directory:

  

```sh

cd ProjectName

```

  

Then, start the development server and launch the app on an Android device or emulator:

  

```sh

npm run android

```

  



  

## 🔹 Troubleshooting Build Failures

If the build fails, try cleaning the Gradle cache and rebuilding the project:

  

```sh

cd android && gradlew clean

```

  

After cleaning, go back to the main project directory and rerun the build:

  

```sh

cd  ..

npm run android

```

  

# 📦 Install Required Libraries

  

## 📌 Install React Native Vector Icons

React Native Vector Icons provides a set of customizable icons for use in your app.

  

To install it, run:

  

```sh

npm install react-native-vector-icons

```

  

### ⚠ Fix: Icons Not Displaying Correctly on Android

If the icons are not appearing as expected, you may need to manually link the fonts in your Android project:

  

1. Open the file:

  

```sh

android/app/build.gradle

```

  

2. Add the following line at the bottom of the file:

  

```gradle

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

  

3. Rebuild the project:

  

```sh

npm run android

```
  

## 📌 Install React Navigation (For Screen Transitions)

React Navigation is used for handling navigation between screens in React Native apps.

  

### 🔹 Step 1: Install Core Navigation Package

Run the following command to install the core navigation package:

  

```sh

npm install @react-navigation/native

```

  

### 🔹 Step 2: Install Required Dependencies

React Navigation requires additional dependencies to work properly:

  

```sh

npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

```

  

### 🔹 Step 3: Install Stack Navigation (For Screen-Based Navigation)

To enable stack-based navigation, install:

  

```sh

npm install @react-navigation/native-stack

```
  

## 📌 Install AsyncStorage (For Persistent Data Storage)

AsyncStorage allows you to store small amounts of persistent data, such as user sessions and preferences.

  

To install it, run:

  

```sh

npm install @react-native-async-storage/async-storage

```

## 📌 Install react-native-safe-area-context

Handles safe area insets on iOS and Android devices (e.g., notches).

  

To install it, run:

  

```sh

npm install react-native-safe-area-context

```


## 📌 Install react-native-linear-gradient

A React Native library to easily create beautiful gradient backgrounds and UI effects, enhancing the app’s visual appeal.

  

To install it, run:

  

```sh

npm install react-native-linear-gradient

```


## 📌 Install @notifee/react-native

A powerful local notification library for React Native, supporting rich scheduling, triggers, channels, and full background handling on both Android and iOS.

  

To install it, run:

  

```sh

npm install @notifee/react-native

```

## 📌Install react-native-respix

A utility library for React Native that helps create responsive pixel sizing across different devices, ensuring consistent UI scaling.

  

To install it, run:

  

```sh

npm install react-native-respix

```


## 📌Install react-native-worklets

A library that enables running animations and worklets on the UI thread in React Native for smoother and more performant animations.

  

To install it, run:

  

```sh

npm install react-native-worklets

```

  

# 🚀 How to Run the App

Follow these steps to run the IdeaFlow React Native app on your device or emulator.

  

## 📌 1️⃣ Start the Metro Bundler

Navigate to the project folder and start the Metro bundler:

  

```sh

cd ProjectName

npm  start

```

  

This will start the development server.

  

## 📌 2️⃣ Run the App on Android

To launch the app on an Android emulator or physical device, run:

  

```sh

npm run android

```

  

### 🔹 Troubleshooting Build Issues

If the build fails, try cleaning the Gradle cache:

  

```sh

cd android && gradlew clean

```

  

Then return to the main project folder and run:

  

```sh

npm run android

```

  

Ensure your Android device or emulator is running and detected using:

  

```sh

adb devices

```

  

---

  

✅ **App is Now Running!** 🎉
