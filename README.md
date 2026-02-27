# COM816: Comparative Evaluation of Cross-Platform Frameworks

## Technical Evaluation Report

---

## 1. Project Description

This repository supports a comparative evaluation of three cross-platform mobile frameworks:

- Flutter (Dart)
- React Native (TypeScript)
- Ionic (theoretical analysis)

The evaluation applies programming language theory concepts:

- Readability
- Writability
- Reliability
- Cost

The objective is to examine how language design (Dart vs. TypeScript/JavaScript) and runtime architecture influence performance, maintainability, and developer experience.

---

## 2. Implemented Experiment

Two minimal To-Do List applications were implemented:

- Flutter (Dart)
- React Native (TypeScript)

Both applications include:
- Add task
- Delete task
- Dynamic UI update

Ionic was not implemented because the evaluation focuses on its WebView-based architecture, which is analyzed in the report.

---

## 3. Development Environment

### Flutter
- Flutter SDK: 3.x (Stable)
- Dart: 3.x
- Compilation:
  - JIT (Development – Hot Reload)
  - AOT (Production – Native ARM)

### React Native
- React Native: 0.7x
- TypeScript enabled
- Environment: React Native CLI
- JavaScript Engine: Hermes

---

## 4. Lines of Code (LOC) Measurement

LOC was measured by counting non-empty, non-comment lines in:

- flutter_todo_app/lib/main.dart
- react_native_todo_app/App.tsx

Approximate results:

| Framework     | LOC |
|--------------|-----|
| Flutter      | ~95 |
| React Native | ~80 |

Generated files and dependencies were excluded from measurement.

---

## 5. Key Findings

- Flutter demonstrates strong runtime consistency due to AOT compilation and elimination of bridge overhead.
- React Native benefits from JavaScript ecosystem ubiquity and reduced entry cost.
- Ionic emphasizes code reuse but introduces additional abstraction layers affecting performance.

---

## 6. Conclusion

From a language design and architectural perspective, Flutter provides the most performance-consistent solution, while React Native offers advantages in accessibility and ecosystem support.

---

Repository created for academic submission (COM816).
