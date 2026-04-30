import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import TextInput from "../TextInput/TextInput"; // Child component that renders the input
import StatsDisplay from "../StatsDisplay/StatsDisplay"; // Child component that displays text stats

function CharacterCounter({ minWords = 50, maxWords = 100 }: CharacterCounterProps) {
  const [text, setText] = useState("");

  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // takes text and returns computed stats.
  const calculateStats = (value: string): TextStats => {
    const characterCount = value.length; // Character count includes spaces and punctuation.
    const trimmed = value.trim(); // trim removes empty/extra outer spaces.
    const wordCount = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length; // Split by any whitespace (spaces, tabs, newlines) to count real words.
    // Reading time uses 200 words per minute, rounded to 2 decimals.
    const readingTime =
      wordCount === 0 ? 0 : Math.round((wordCount / 200) * 100) / 100;

    // Return the object expected by TextStats.
    return { characterCount, wordCount, readingTime };
  };

  // Runs whenever TextInput gets a new value.
  const handleTextChange = (nextText: string) => {
    // Update source text state.
    setText(nextText);
    // Re-evaluates and store fresh stats immediately.
    setStats(calculateStats(nextText));
  };

  const wordGoalStatus = // Determine if user is under, over, or on track with word count goals.
    stats.wordCount < minWords 
      ? "under"
      : stats.wordCount > maxWords
        ? "over"
        : "on track";

  const progressPercentage = // Calculate progress towards max word goal as a percentage, capped at 100%.
    maxWords > 0 ? Math.min((stats.wordCount / maxWords) * 100, 100) : 0;

  return (
    <section className="flex flex-col gap-6 p-8 rounded-2xl bg-(--color-bg-subtle) border border-(--color-border) shadow-(--color-shadow)">
      <h1 className="text-3xl font-bold text-(--color-text-heading)">Character Counter</h1>

      <TextInput
        input={text}
        onTextChange={handleTextChange}
        placeholder="Type something..."
      />
      {/* Stats panel receives latest computed values from parent state. */}
      <StatsDisplay stats={stats} showReadingTime={true} />

      <section aria-live="polite">
        <h2>Word Goal</h2>
        <p>
          Progress: {stats.wordCount}/{maxWords} words
        </p>
        <progress value={Math.min(stats.wordCount, maxWords)} max={maxWords}>
          {progressPercentage.toFixed(0)}%
        </progress>
        <p>Status: {wordGoalStatus}</p>
        <p>
          Target range: {minWords} - {maxWords} words
        </p>
      </section>
    </section>
  );
}

export default CharacterCounter;
