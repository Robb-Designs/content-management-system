import {useState} from "react";
import type {TextStats} from "../../types";
import type {StatsDisplayProps} from "../../types";


function StatsDisplay() {

    const [textStats, setTextStats] = useState<TextStats>({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
    });

    return (
// display char count
//display word count
//display reading time in minutes (optional)
    );
}

export default StatsDisplay;