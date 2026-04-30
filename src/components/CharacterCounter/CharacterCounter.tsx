
import { useState } from "react";
import type { TextStats } from "../../types";
import TextInput from "../TextInput/TextInput"; // Child component that renders the input 
import StatsDisplay from "../StatsDisplay/StatsDisplay"; // Child component that displays text stats


function CharacterCounter() {

  const [text, setText] = useState("");

  
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // takes text and returns computed stats.
  const calculateStats = (value: string): TextStats => {
  // Character count includes spaces and punctuation.
  const characterCount = value.length;
  // trim removes empty/extra outer spaces .
  const trimmed = value.trim();
  // Split by any whitespace (spaces, tabs, newlines) to count real words.
  const wordCount = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
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

  
  return (
    <section>
      <h1>Character Counter</h1>
      
      <TextInput
        input={text}
        onTextChange={handleTextChange}
        placeholder="Type something..."
      />
      {/* Stats panel receives latest computed values from parent state. */}
      <StatsDisplay stats={stats} showReadingTime={true} />
    </section>
  );
}


export default CharacterCounter;