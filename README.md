# Character Counter

A live character and word counter built with React, TypeScript, and Tailwind CSS v4.

---

## Overview

Character Counter is a single-page application that tracks text statistics as you type. It provides feedback on character count, word count, estimated reading time, and progress toward a configurable word-count goal.


## Features

- Live character count (includes spaces and punctuation)
- Live word count (handles extra whitespace and empty input safely)
- Estimated reading time at 200 words per minute, rounded to 2 decimals
- Word-goal progress bar with configurable min and max word targets
- Under / on track / over status feedback
- Rose and peach themed design with full dark mode support
- Responsive layout down to mobile widths


## Project Structure

```
src/
├── App.tsx
├── App.css
├── index.css
├── main.tsx
├── types/
│ └── index.ts # Shared TypeScript interfaces
└── components/
├── CharacterCounter/
│ └── CharacterCounter.tsx # Root feature component
├── StatsDisplay/
│ └── StatsDisplay.tsx # Renders character, word, and reading time stats
└── TextInput/
└── TextInput.tsx # Controlled text input
```
