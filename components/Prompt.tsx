import { ChangeEvent, useState } from "react"

type Props = {
    handleClick: (prompt: string) => void
}

export default function Prompt({handleClick} : Props) {
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

    return (
        <>
            <label>Prompt: </label>
            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={() => handleClick(inputValue)}>Submit</button>
        </>
    )
}