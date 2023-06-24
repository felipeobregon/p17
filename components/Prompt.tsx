import { ChangeEvent, useState } from "react"

export default function Prompt(handleClick: () => void) {
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

    return (
        <>
            <label>Prompt: </label>
            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}