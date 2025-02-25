// Run this command to replace your README.md
// Make sure you're in your project root directory

# Create updated README.md
cat > README.md << 'EOL'
# Harmony Gate (和門 Hé Mén)

A holistic Daoist yoga and spiritual practice platform integrating traditional wisdom with modern techniques.

## Vision

Harmony Gate represents the threshold where opposing forces meet and merge. Our name reflects both the journey and the destination: the achievement of harmony through conscious practice and transformation.

## Bridging Eastern and Western Practices

Our unique approach integrates traditional Daoist principles with accessible Western yoga forms, creating:

- **Physical Development** that properly prepares and opens the body's channels
- **Energy Cultivation** that builds upon correct physical alignment
- **Spiritual Transformation** that naturally emerges from consistent practice

## Core Offerings

- **Daoist Yoga Practices** - Sequences that work with meridian systems while building strength and flexibility
- **Qigong Training** - Traditional energy development methods
- **Meditation Techniques** - Still and moving practices for mind-body integration
- **Theoretical Foundations** - Comprehensive study of Daoist principles and energy concepts
- **Progressive Learning Paths** - Systematic development from beginner to advanced levels

## Technical Implementation

### Built With
- React 18
- React Router 6
- Tailwind CSS with custom theme
- Vite for build tooling
- GitHub Pages for deployment

### Project Structure

```
harmonygate/                      # Repository root
├── public/                       # Public assets
└── src/                          # Source code
    ├── components/               # React components
    │   ├── practice/            # Practice-related components
    │   ├── education/           # Educational components
    │   ├── theory/             # Theory components
    │   └── layout/             # Layout components
    ├── pages/                   # Page components
    ├── context/                 # React context providers
    ├── styles/                  # Global styles
    └── assets/                  # Images and other assets
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/harmonygate/harmonygate.git
cd harmonygate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment to GitHub Pages

```bash
npm run deploy
```

## Core Philosophical Principles

- **Integration** - Harmonizing Eastern energy principles with Western physical practices
- **Balance** - Cultivating equilibrium between opposing forces (yin-yang)
- **Transformation** - Facilitating profound change through consistent practice
- **Authenticity** - Honoring traditional wisdom while making it accessible to modern practitioners

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*"The integration of breath, movement, and awareness creates the conditions for transformation on all levels—physical, energetic, and spiritual."*
EOL