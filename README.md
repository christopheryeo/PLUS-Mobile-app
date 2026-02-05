# PLUS Demo Mobile App

A monorepo containing both the React Native mobile application and web preview for Malaysia's PLUS Highway Authority system.

## 📁 Project Structure

```
PLUS-Demo-Mobile-App/
├── mobile/          # React Native mobile app (iOS & Android)
├── web-preview/     # Vite + React web preview for quick testing
└── README.md        # This file
```

## 🚀 Quick Start

### Mobile App (React Native)

```bash
cd mobile
npm install

# iOS (requires Xcode)
cd ios && bundle install && bundle exec pod install && cd ..
npx react-native run-ios

# Android (requires Android Studio)
npx react-native run-android
```

### Web Preview

```bash
cd web-preview
npm install
npm run dev
```

The web preview will be available at `http://localhost:5173/`

## 📱 Mobile App Features

- **Home Dashboard** - Quick access to all features with live traffic status
- **Journey Planner** - Route planning with vehicle selection and cost estimates
- **Journey Results** - Detailed trip breakdown with R&R stops
- **Emergency SOS** - Quick emergency contact with direction selection
- **Live CCTV** - Real-time traffic camera feeds
- **Rewards Catalogue** - Points-based rewards system
- **Traffic Alerts** - AI-powered traffic recommendations

### Tech Stack (Mobile)
- React Native 0.83.1
- React Navigation (Stack + Bottom Tabs)
- React Native Vector Icons
- TypeScript ready

## 🌐 Web Preview Features

The web preview provides an instant way to test the app interface without requiring Xcode or Android Studio setup. It includes:

- All main screens (Home, Planner, Journey Results, SOS, CCTV)
- Bottom tab navigation
- Mobile-optimized layout
- Real traffic camera imagery

### Tech Stack (Web)
- Vite 7.3.1
- React 18
- React Router v6

## 🎨 Design System

Both mobile and web share a consistent design language:

### Colors
- Primary: `#008a45` (PLUS Green)
- Background Light: `#f5f8f7`
- Background Dark: `#0f2319`

### Typography
- Font Family: Inter
- Sizes: 10px - 64px scale
- Weights: Regular, Medium, SemiBold, Bold, ExtraBold

## 📄 Documentation

- **Mobile README**: [mobile/README.md](./mobile/README.md)
- **Architecture**: See artifacts folder for detailed diagrams and documentation

## 🔄 Development Workflow

1. Make changes in either `mobile/` or `web-preview/`
2. Test locally using respective dev servers
3. Commit changes to the monorepo
4. Push to remote (when configured)

## 🛠️ Maintenance

### Installing Dependencies

```bash
# Mobile
cd mobile && npm install

# Web Preview  
cd web-preview && npm install
```

### Cleaning Build Artifacts

```bash
# Mobile - iOS
cd mobile/ios && pod deintegrate && pod install

# Mobile - Android
cd mobile/android && ./gradlew clean

# Web Preview
cd web-preview && rm -rf dist node_modules && npm install
```

## 📝 License

© PLUS Malaysia Highway Authority

---

Built with ❤️ using React Native and React
