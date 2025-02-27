# Harmony Gate (和門) - Daoist Yoga & Spiritual Practice Platform

A modern web application for Daoist yoga practice, energy cultivation, and spiritual development. This platform integrates traditional Eastern energy arts with Western yoga practices for a comprehensive approach to personal transformation.

## Project Structure

The Harmony Gate platform is organized as follows:

### Core Sections

- **Study** - Educational content and theory about different practices
  - Daoist Yoga - Our integrated approach to energy cultivation through physical postures
  - QiGong - Traditional energy cultivation practices
  - TaijiGong - Flowing meditation through spiral movements
  - Meditation - Still meditation practices
  - Wisdom - Teachings from Sovereign Harmony (the founder)

- **Practice** - Interactive practice sessions and progress tracking
  - Practice Dashboard - Personalized practice recommendations
  - Practice Sessions - Guided practice experiences
  - Quick Practice - Short sessions for limited time availability

- **Theory** - In-depth theoretical foundations
  - Energy Cultivation - Understanding energy development stages
  - Philosophy - Core Daoist principles and wisdom

- **Profile** - User account and progress management
  - Progress Tracking - Visual journey through cultivation phases
  - Achievements - Recognition for practice milestones
  - Settings - Account preferences and notifications

### Technical Organization

```
harmony-gate/
├── public/                       # Static assets
│   ├── favicon.svg              # Site favicon
│   └── site.webmanifest         # PWA configuration
│
├── src/                          # Source code
│   ├── components/               # Reusable UI components
│   │   ├── common/               # Shared components
│   │   │   ├── ErrorBoundary.jsx # Error handling
│   │   │   └── LoadingScreen.jsx # Loading state
│   │   ├── layout/               # Layout components
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   └── Navbar.jsx        # Navigation bar
│   │   ├── practice/             # Practice components
│   │   │   ├── PracticeSession.jsx      # Guided practice experience
│   │   │   └── RecommendedPractice.jsx  # Practice recommendations
│   │   ├── profile/              # User profile components
│   │   │   └── PracticeProgress.jsx     # Progress tracking
│   │   └── sections/             # Page sections
│   │       ├── CorePrinciples.jsx      # Philosophy principles
│   │       ├── DaoistYogaConcept.jsx   # Concept explanation
│   │       ├── FounderSection.jsx      # Sovereign Harmony section
│   │       ├── HeroSection.jsx         # Homepage hero
│   │       ├── PhilosophySection.jsx   # Philosophy overview
│   │       ├── PracticePaths.jsx       # Practice paths overview
│   │       └── TeachingsSection.jsx    # Teachings overview
│   │
│   ├── context/                  # React context providers
│   │   ├── AppContext.jsx        # Application state
│   │   └── AuthContext.jsx       # Authentication state
│   │
│   ├── pages/                    # Page components
│   │   ├── practice/             # Practice pages
│   │   │   ├── PracticeDashboard.jsx    # Practice dashboard
│   │   │   ├── PracticeSession.jsx      # Practice session page
│   │   │   └── QuickPractice.jsx        # Quick practice page
│   │   ├── profile/              # Profile pages
│   │   │   ├── UserAchievements.jsx     # User achievements
│   │   │   ├── UserProfile.jsx          # User profile
│   │   │   └── UserSettings.jsx         # User settings
│   │   ├── study/                # Study section pages
│   │   │   ├── DaoistYoga.jsx           # Daoist Yoga overview
│   │   │   ├── QiGong.jsx               # QiGong overview
│   │   │   └── TaijiGong.jsx            # TaijiGong overview
│   │   ├── About.jsx             # About page
│   │   ├── Blog.jsx              # Wisdom articles listing
│   │   ├── BlogPost.jsx          # Single wisdom article
│   │   ├── Home.jsx              # Home page
│   │   ├── Meditation.jsx        # Meditation overview
│   │   ├── NotFound.jsx          # 404 page
│   │   ├── Practice.jsx          # Practice overview
│   │   └── Theory.jsx            # Theory overview
│   │
│   ├── App.jsx                   # Application component with routes
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
│
├── eslint.config.js              # ESLint configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite configuration
```

## Getting Started

1. Clone the repository
```
git clone https://github.com/your-username/harmony-gate.git
cd harmony-gate
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Build for production
```
npm run build
```

## Key Features

- **Integrated Learning System**: Theory and practice are seamlessly integrated
- **Progressive Development Path**: Users advance through structured cultivation phases
- **Interactive Practice Tools**: Guided sessions with timers and progress tracking
- **User Progress Tracking**: Visual journey through the cultivation phases
- **Achievement System**: Recognition for practice milestones
- **Responsive Design**: Optimized for all devices

## Design System

The Harmony Gate platform uses a consistent design system featuring:

- **Colors**: Jade and gold accent colors against a dark stone background
- **Typography**: Inter for UI, Noto Serif for headings, Noto Sans SC for Chinese text
- **Components**: Card-based layouts with subtle animations and transitions
- **Iconography**: Lucide icons throughout the interface

## Browser Support

This application is optimized for modern browsers and includes comprehensive favicon support for various platforms and devices.