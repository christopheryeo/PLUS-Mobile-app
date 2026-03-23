# CLAUDE.md — PLUS Demo Mobile App

## Project Overview

A monorepo demo application for Malaysia's **PLUS Highway Authority** system, containing both a React Native mobile app (iOS & Android) and a Vite + React web preview for quick testing. Built to demonstrate Sentient.io platform capabilities to prospects and partners.

## Directory Structure

```
PLUS Demo Mobile App/
├── mobile/              # React Native mobile app (iOS & Android)
│   ├── src/             # Application source code
│   ├── ios/             # iOS native project (Xcode)
│   ├── android/         # Android native project (Android Studio)
│   ├── App.tsx          # Root application component
│   ├── package.json     # Mobile dependencies
│   └── tsconfig.json    # TypeScript configuration
├── web-preview/         # Vite + React web preview
│   ├── src/             # Web source code
│   ├── public/          # Static assets
│   ├── index.html       # Entry HTML
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Web dependencies
└── README.md
```

## Technology Context

### Mobile
- **Framework**: React Native 0.83.1
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Icons**: React Native Vector Icons
- **Language**: TypeScript
- **Build**: Metro bundler

### Web Preview
- **Framework**: React 18
- **Build**: Vite 7.3.1
- **Routing**: React Router v6
- **Port**: 5173 (dev server)

### Design System

Both platforms share a consistent design language:

- **Primary colour**: `#008a45` (PLUS Green)
- **Background Light**: `#f5f8f7`
- **Background Dark**: `#0f2319`
- **Font Family**: Inter
- **Font Sizes**: 10px–64px scale
- **Font Weights**: Regular, Medium, SemiBold, Bold, ExtraBold

## App Features

- **Home Dashboard** — Quick access to all features with live traffic status
- **Journey Planner** — Route planning with vehicle selection and cost estimates
- **Journey Results** — Detailed trip breakdown with R&R stops
- **Emergency SOS** — Quick emergency contact with direction selection
- **Live CCTV** — Real-time traffic camera feeds
- **Rewards Catalogue** — Points-based rewards system
- **Traffic Alerts** — AI-powered traffic recommendations

## Commands

### Check Repo

When the user says "Check Repo", perform the following procedure:

1. **Verify No Uncommitted Changes** — Check `git status` to ensure the working directory is clean.
2. **Fetch Remote Changes** — Run `git fetch` to retrieve the latest remote state without merging.
3. **Compare Local and Remote** — Check if the local branch is ahead, behind, or has diverged from the remote tracking branch.
4. **Report Status** — Provide a concise summary. If synced, confirm it. If not, state exactly what needs to be committed, pushed, or pulled.

### Git Versions

When the user says "Git Versions" or asks for recent versions:

1. **Run Git Log** — Execute `git log --oneline -n 5` to fetch the last 5 commits.
2. **Present to User** — Display the list directly as a bulleted list or code block.

### Run Web Preview

When the user says "Run Web Preview" or asks to start the web preview:

1. **Check dependencies** — Verify `node_modules` exists in `web-preview/`. If not, run `npm install`.
2. **Start dev server** — Run `npm run dev` in `web-preview/`.
3. **Report** — Confirm the server is running and provide the URL (`http://localhost:5173/`).

### Install Deps

When the user says "Install Deps" or asks to install dependencies:

1. **Mobile** — Run `cd mobile && npm install`.
2. **Web Preview** — Run `cd web-preview && npm install`.
3. **Report** — Confirm both installations completed successfully. Flag any peer dependency warnings or errors.

### Clean Build

When the user says "Clean Build" or asks to clean build artifacts:

1. **Confirm with user** — State what will be cleaned and ask for confirmation.
2. **Web Preview** — Remove `web-preview/dist` and `web-preview/node_modules`, then run `npm install`.
3. **Mobile iOS** (if applicable) — Run `cd mobile/ios && pod deintegrate && pod install`.
4. **Mobile Android** (if applicable) — Run `cd mobile/android && ./gradlew clean`.
5. **Report** — Confirm cleanup and reinstallation completed.

### Component List

When the user says "Component List" or asks for a list of screens/components:

1. **Scan** — List all `.tsx` and `.jsx` files in `mobile/src/` and `web-preview/src/`.
2. **Group by type** — Separate into screens, components, and utilities.
3. **Present as a table** — Show columns: `#`, `Platform`, `Type`, `Component Name`, `File Path`.

## Editing Guidelines

### When modifying screens or components

- Maintain consistency between mobile and web-preview versions
- Follow the shared design system (colours, typography, spacing)
- Use TypeScript for any new mobile code
- Test on both platforms when making shared logic changes

### When adding new features

- Add the screen/component to both `mobile/src/` and `web-preview/src/` where applicable
- Update navigation configuration (React Navigation for mobile, React Router for web)
- Maintain the bottom tab structure for consistency

### When updating dependencies

- Run `npm install` in the specific subfolder (mobile or web-preview)
- For mobile iOS, always run `cd ios && pod install` after updating native dependencies
- Test the build after dependency updates before committing
