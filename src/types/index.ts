// TYPES---------------------------------------------------------------------------------


//Text Input Props
//This interface defines the props for the TextInput component, which includes a callback function for when the text changes, an optional placeholder, and an optional initial value.
export interface TextInputProps {
    // These props are required for the TextInput component to function properly, as they allow the parent component to manage the state of the input and provide feedback to the user.
  onTextChange: (text: string) => void;
  input: string;

  //Optional props
  placeholder?: string;
  initialValue?: string;
}

// Stats Display Props
//This interface defines the props for the StatsDisplay component, which includes the current character count and the maximum character limit.
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// This interface is used to type the props for the StatsDisplay component, ensuring that it receives the necessary data to display the character count, word count, and optionally the reading time to the user.
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}


// Character Counter Props
//This interface defines the props for the CharacterCounter component, which includes an optional character limit and a boolean to determine whether to show the reading time.
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}