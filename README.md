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


## Reflection: My Thoughts

During this build, there were a couple of concepts I explored more deeply. Implementing `useState` for example; I used two separate useState hooks — one hook for the string value and the other hook for the computed stats. So, when a user types in the input, it'll call `{handleTextChange}` which updates both of my states in the same function call. I kept `text` and `stats` as separate state values because they serve different roles. `text` is the controlled value that feeds back into the input, while `stats` is the output computed from `text`. Having them together in one useState object felt unnecessary; I felt Combining them into a single state object would have conflated the two different concerns.

The main challenge was making word counting reliable across edge cases. A simple split on spaces breaks with multiple consecutive spaces or trailing whitespace, reporting phantom words. I solved this by trimming the string first and then splitting on `/\s+/` to match any whitespace sequence. I also had to explicitly guard against the empty string case, since splitting an empty string still returns a one-element array.