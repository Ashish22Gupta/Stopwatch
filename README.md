# ⏱️ Stopwatch
### Video-Backed, Millisecond-Precision Timer

> ⚠️ **DISCLAIMER:** This is a **personal learning and portfolio project**. It demonstrates JavaScript interval timing, time-formatting math, and video-background UI layering. All timing runs entirely in the browser — no data is collected, stored, or transmitted.

A stylish stopwatch with **millisecond precision** (`MM:SS:mm` format), set against a looping video background. Start, stop, and reset with color-coded buttons — green for start, red for stop, blue for reset — while the timer updates every 10ms for smooth, high-resolution timing. Fully responsive from large desktops down to ultra-narrow mobile screens.

![Version](https://img.shields.io/badge/Version-1.0.0-800080)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-F4B400)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%26%20Mobile-2D6A4F)

---

## 🔗 Live Links

- **Live Demo:** [peaclock.netlify.app](https://peaclock.netlify.app)
- **Source Code:** [github.com/Ashish22Gupta/Stopwatch](https://github.com/Ashish22Gupta/Stopwatch)

---

## ✨ Implemented Features

### ⏲️ Millisecond-Precision Timing
- **10ms Tick Rate** - `setInterval(updateTimer, 10)` updates the display 100 times per second.
- **Formatted Display** - Shows `HH:MM:SS.mmm` — hours, minutes, seconds, and milliseconds.
- **Cascading Time Math** - Milliseconds roll into seconds at `1000`, seconds into minutes at `60`, and minutes into hours at `60`.
- **Zero-Padded Output** - Single-digit hours/minutes/seconds get a `0` prefix; milliseconds get `00`/`0`/none depending on width.

### 🎮 Three-Button Control
| Button | Color | Action |
|--------|-------|--------|
| **START** | Green | Begins timing (guarded by `running` flag — no double-start) |
| **STOP** | Red | Halts the interval and freezes the display |
| **RESET** | Blue | Stops and zeroes all counters, resetting display to `00:00:00.000` |

- **Start Guard** - `if (!running)` prevents spawning multiple intervals on repeated clicks.
- **Stop Guard** - `if (running)` prevents calling `clearInterval` on a stopped timer.

### 🎬 Video Background
- **Looping Full-Screen Video** - `timer.mp4` plays `autoplay loop muted` behind the timer, covering the viewport with `object-fit: cover`.
- **Z-Index Layering** - Video sits at `z-index: -1`, keeping the timer and buttons fully interactive on top.
- **Black Fallback** - Body background is `black`, so if the video fails to load, the UI still looks intentional.

### 🎨 Visual Design
- **Purple Timer Text** - Large `10em` display in `purple` (identity color for this project).
- **Pill-Shaped Buttons** - `border-radius: 5vh` creates fully rounded buttons.
- **Bold Typography** - `font-weight: bolder` on buttons for strong contrast.
- **Centered Layout** - Absolute positioning with `translate(-50%, -50%)` centers everything on screen.

### 📱 Extensive Responsive Design
This project has **11 media query breakpoints** — one of the most thorough responsive implementations in the portfolio:
| Breakpoint | Timer Font | Button Size |
|------------|------------|-------------|
| ≤1140px | 10em | 25vh × 10vh |
| ≤986px | 10em | 20vh × 8vh |
| ≤850px | 9em | 20vh × 8vh |
| ≤792px | 7em | 15vh × 6vh |
| ≤598px | 5em | 11vh × 5vh |
| ≤442px | 4em | 10vh × 5vh |
| ≤404px | 4em | 9vh × 4.5vh |
| ≤365px | 3em | 8vh × 4.5vh |
| ≤326px | 3em | 7.5vh × 4vh |
| ≤307px | 3em | 6.5vh × 4vh |
| ≤267px | 2em | fit-content × 3.5vh |

- **Progressive Scaling** - Text and buttons shrink continuously so the UI never overflows.
- **Margin Reset** - Horizontal margins on buttons collapse to `0` at `1140px` and below for proper stacking.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Video element, timer display, control buttons |
| **CSS3** | Video background layering, 11 responsive breakpoints, pill buttons |
| **Vanilla JavaScript** | Interval timing, cascading time math, display formatting |
| **MP4 Video** | Looping atmospheric background |

---

## 📁 Project Structure

```text
Stopwatch/
├── index.html          # Timer display, buttons, video element
├── styles.css          # Video layering, 11 responsive breakpoints
├── script.js           # Timing logic and display formatting
└── timer.mp4           # Looping background video
