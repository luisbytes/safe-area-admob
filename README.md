# Minimal reproduction

This repository contains a minimal reproduction for the Comment https://github.com/ionic-team/capacitor/pull/8424#issuecomment-4216339816.

### Environment used for testing
- macOS (development)
- Ionic / Capacitor (this project)
- Android Emulator 14 (API 34) With Play Store in Android Studio
- Android WebView version 146 and 113

### Steps to reproduce
1. Install project dependencies (this repo uses pnpm because a patch with the PR changes is applied):

```bash
pnpm install
```

2. Run the app on the emulator:

```bash
pnpm start
```

3. Open the app on the emulator

### Screenshots

Below are screenshots that illustrate the issue described above.

| Webview 146 | Webview 113 |
|---|---|
| <img src="screenshots/one.png" alt="Screenshot 1" width="300" /> | <img src="screenshots/two.png" alt="Screenshot 2" width="300" /> |

