import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";

function CharacterCounter(props: CharacterCounterProps) {
  const [text, setText] = useState("");

  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  return (
    <section>
      <h1>Character Counter</h1>
      <p>Text and stats state are ready.</p>
    </section>
  );
}

export default CharacterCounter;