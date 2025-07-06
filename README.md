
# Beachvolleyball Antizipationstraining

Eine minimalistische Web-App zur Verbesserung der Antizipationsfähigkeit beim Beachvolleyball.

## 🎯 Funktionsweise

Die App zeigt Ich-Perspektive-Videos von Beachvolleyballszenen. Nach einer kurzen Videodauer stoppt das Video automatisch und du musst per Tastendruck eine Entscheidung treffen, wohin der Ball vermutlich geschlagen wird.

### Tastatur-Steuerung

| Taste | Bedeutung |
|-------|-----------|
| **W** | Schritt nach vorn (Shot, kurzer Ball) |
| **S** | Zurückfallen (Lob, tiefer Ball) |
| **A** | Diagonal (Cross) |
| **D** | Linie |

## 🚀 Setup & Installation

```bash
# Repository klonen
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

## 📁 Projektstruktur

```
src/
├── components/           # React Komponenten
│   ├── BeachvolleyballTraining.tsx  # Haupt-App Komponente
│   ├── VideoPlayer.tsx             # Video-Player Logik
│   ├── FeedbackOverlay.tsx         # Feedback Anzeige (Richtig/Falsch)
│   ├── ScoreDisplay.tsx            # Punkteanzeige
│   └── FinalScore.tsx              # Endergebnis-Bildschirm
├── hooks/               # Custom React Hooks
│   ├── useKeyboardInput.ts         # Tastatur-Input Handler
│   └── useTrainingGame.ts          # Spiel-Logik
├── types/               # TypeScript Typen
│   └── Scene.ts                    # Scene Interface
├── data/                # Daten-Konfiguration
│   └── scenes.ts                   # Video-Szenen Konfiguration
└── pages/               # Seiten
    └── Index.tsx                   # Hauptseite
```

## 🎥 Videos hinzufügen

1. Videodateien in den `public/` Ordner legen
2. Szenen-Konfiguration in `src/data/scenes.ts` anpassen:

```typescript
export const scenes: Scene[] = [
  { 
    video: "mein-video.mp4", 
    expectedKey: "A",        // Erwartete Taste (W/A/S/D)
    stopAt: 3.4,            // Stopp-Zeitpunkt in Sekunden
    description: "Beschreibung der Szene"
  },
  // Weitere Szenen...
];
```

## 🔧 Anpassungen

### Neue Szenen hinzufügen
- Bearbeite `src/data/scenes.ts`
- Füge neue Video-Objekte mit `video`, `expectedKey` und `stopAt` hinzu

### UI-Anpassungen
- **Video-Player**: `src/components/VideoPlayer.tsx`
- **Feedback-Design**: `src/components/FeedbackOverlay.tsx`
- **Score-Anzeige**: `src/components/ScoreDisplay.tsx`

### Spiel-Logik ändern
- **Tastatur-Input**: `src/hooks/useKeyboardInput.ts`
- **Haupt-Spiellogik**: `src/hooks/useTrainingGame.ts`

## 🎮 Spielablauf

1. Video startet automatisch
2. Video stoppt bei vordefiniertem Zeitpunkt
3. 2 Sekunden Zeit für Tasteneingabe (W/A/S/D)
4. Feedback wird angezeigt (Grün = Richtig, Rot = Falsch)
5. Automatischer Übergang zur nächsten Szene
6. Endergebnis nach allen Szenen

## 📊 Features

- ✅ Vollbild-Video-Darstellung
- ✅ Minimalistisches Design ohne Ablenkungen
- ✅ Punkteverfolgung und Statistiken
- ✅ Automatischer Szenen-Übergang
- ✅ Responsive Design
- ✅ TypeScript für bessere Code-Qualität
- ✅ Modulare Komponenten-Struktur

