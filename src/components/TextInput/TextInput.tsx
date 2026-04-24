import type { TextInputProps } from "../../types";

//Create a TextInput component that handles user input and communicates changes to its parent.
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  input,
  placeholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onTextChange(newValue);
  };

  //this returns an input element that is controlled by the parent component through the input prop, and it calls the onTextChange callback whenever the user types something, allowing the parent to update state.
  return (
    <>
      <label htmlFor="text-input" className="text-input-label">
        Enter text:
      </label>
      <input
        id="text-input"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-input"
      />
    </>
  );
};

export default TextInput;
