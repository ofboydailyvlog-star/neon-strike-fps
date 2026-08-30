# 🎮 NEON STRIKE — FPS Game (PWA)

A browser-based First-Person Shooter game built with **Three.js**. Survive endless waves of neon enemies in a synthwave arena!

## 🎯 Features

- **True FPS Experience** — Pointer Lock API for desktop mouse aim, virtual joystick for mobile
- **Wave-Based Survival** — Endless waves with increasing difficulty, 3 enemy types (Grunt, Runner, Tank)
- **Procedural Audio** — All sound effects generated via Web Audio API (no audio files needed)
- **Synthwave Aesthetic** — Neon visuals, fog, dynamic lighting, particle effects
- **Full PWA** — Installable, offline-capable, with app icons and manifest
- **Mobile + Desktop** — Responsive controls for both platforms
- **Zero Dependencies** — Pure vanilla JS + Three.js (via CDN/importmap)
- **Zero Cost** — Fully free, no API keys, no backend

## 🎮 Controls

### Desktop
- **WASD** — Move
- **Mouse** — Look around
- **Left Click** — Shoot
- **R** — Reload
- **Shift** — Sprint
- **ESC** — Pause

### Mobile
- **Left joystick** — Move
- **Right side drag** — Look
- **Fire button** — Shoot
- **RELOAD button** — Reload

## 🏗️ Tech Stack

- **Rendering:** Three.js r169 (WebGL)
- **Audio:** Web Audio API (procedural)
- **Input:** Pointer Lock API + Touch Events
- **PWA:** Service Worker + Web App Manifest
- **Hosting:** GitHub Pages / Netlify

## 📁 Project Structure

```
neon-strike/
├── index.html          # Main HTML with HUD and menus
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline caching)
├── css/
│   └── style.css       # All game styling
├── js/
│   ├── main.js         # Game loop & state management
│   ├── config.js       # Constants & game config
│   ├── utils.js        # Helper functions
│   ├── audio.js        # Procedural audio manager
│   ├── input.js        # Desktop + mobile input
│   ├── world.js        # Arena/level builder
│   ├── player.js       # Player controller & weapon
│   ├── enemies.js      # Enemy AI & spawning
│   ├── effects.js      # Particles, tracers, explosions
│   └── ui.js           # HUD & menu management
└── icons/
    ├── icon-192.png    # PWA icon
    └── icon-512.png    # PWA icon
```

## 🚀 Play

Open `index.html` in a modern browser, or visit the deployed site.

## 📝 License

MIT
