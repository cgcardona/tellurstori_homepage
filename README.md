# Stori DAW Documentation

Documentation website for Stori - Professional DAW for macOS.

## Current Version: v0.1.7 Beta

### What's Shipping

- **Professional DAW** - Multi-track timeline, audio recording, MIDI sequencing
- **128 GM Instruments** - Full General MIDI with SoundFont support
- **8 Studio Effects** - Reverb, delay, chorus, compressor, EQ, distortion, filter, modulation
- **Piano Roll & Score Editor** - Traditional and notation-based MIDI editing
- **Step Sequencer** - 16-step drum machine with 300+ patterns
- **16-Voice Synthesizer** - Polyphonic synth with ADSR envelopes
- **Audio Unit Plugins** - Full AU plugin hosting for third-party instruments
- **Accessibility** - VoiceOver, keyboard navigation, high contrast support

### Coming Soon

- **AI Music Generation** - Generate music from text descriptions
- **AI Sound Effects** - Create foley, ambience, and textures
- **AI Chat Assistant** - Music theory help and production advice
- **AI Album Artwork** - Generate cover art for your tracks
- **Web3/NFT Integration** - Mint and sell music NFTs on Avalanche L1

## File Structure

```
docs/
├── index.html              # Homepage / landing page
├── docs.html               # Documentation hub
├── getting-started.html    # Installation and first steps
├── interface-overview.html # UI guide
├── keyboard-shortcuts.html # Shortcut reference
├── troubleshooting.html    # Common issues
│
├── # Core DAW Features
├── timeline-editing.html   # Timeline and arrangement
├── mixer.html              # Mixer and effects
├── recording.html          # Audio recording
│
├── # MIDI & Instruments
├── midi-instruments.html   # MIDI workflow, instruments
├── step-sequencer.html     # Drum machine
│
├── # AI Features (Coming Soon)
├── ai-generation.html      # AI music generation
├── ai-assistant.html       # AI chat assistant
├── image-generation.html   # AI album artwork
│
├── # Web3 Features (Coming Soon)
├── blockchain.html         # Tokenization guide
├── marketplace.html        # NFT marketplace
│
├── # Reference
├── context-menus.html      # Right-click menu reference
├── accessibility.html      # Accessibility features
│
├── # Assets
├── assets/
│   └── screenshots/        # App screenshots
├── styles.css              # Stylesheet
├── script.js               # JavaScript
├── CNAME                   # Custom domain config
└── README.md               # This file
```

## Deployment

This documentation is designed for GitHub Pages hosting.

### Deploy to GitHub Pages

1. Push to your repository
2. Go to Settings > Pages
3. Select `main` branch and `/ (root)` folder
4. Your docs will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Custom Domain

Add your domain to the `CNAME` file and configure DNS to point to GitHub Pages.

## Development

The site uses vanilla HTML, CSS, and JavaScript with no build step required.

- Edit HTML files directly
- Styles are in `styles.css`
- Animations and mobile menu in `script.js`

## Screenshots

Screenshots should be placed in `assets/screenshots/` with these names:
- `hero-main-daw.png` - Main DAW interface
- `timeline.png` - Timeline view
- `mixer.png` - Mixer panel
- `piano.png` - Piano roll
- `effects.png` - Effects panel
- `record.png` - Recording interface

## License

© 2026 TellUrStori. All rights reserved.
