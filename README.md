# # COM816 Assignment 2 — Cross-Platform Framework Comparison

**Module:** COM816: Organization of Programming Languages
**Assignment:** Comparative Evaluation of Cross-Platform Frameworks
**Topic:** React Native vs. Flutter vs. Ionic

---

## Repository Structure
/
├── flutter_todo_app/
│   ├── lib/
│   │   └── main.dart        # Flutter To-Do List (~78 LOC)
│   └── pubspec.yaml
│
├── react_native_todo_app/
│   ├── App.tsx              # React Native To-Do List (~70 LOC)
│   └── package.json
│
└── README.md
## LOC Summary

| Metric | Flutter | React Native |
|--------|---------|--------------|
| Language | Dart | TypeScript |
| LOC (excl. blanks & comments) | ~78 | ~70 |
| Overhead | Flutter is 11% more verbose | — |

## How to Run

### Flutter
```bash
cd flutter_todo_app
flutter pub get
flutter run
React Native
cd react_native_todo_app
npm install
npx expo start
Test Environment
Device: MacBook Pro M2 (2023)
iOS: iPhone 15 Pro Simulator, iOS 17.2
Android: Pixel 7 Emulator, API 34
Flutter version: 3.19.0
React Native version: 0.73.6 (Expo SDK 50)
LOC tool: counted manually, excluding blank lines and comments
