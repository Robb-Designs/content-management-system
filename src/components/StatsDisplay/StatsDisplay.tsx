import type { StatsDisplayProps } from "../../types";

function StatsDisplay( { stats, showReadingTime = true }: StatsDisplayProps): React.ReactElement {

  return (
    <section className="stats-display" aria-live="polite">
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>
      {showReadingTime && <p>Reading time: {stats.readingTime} min</p>}
    </section>
  );
}

console.log(StatsDisplay)

export default StatsDisplay;
