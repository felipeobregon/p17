import { useEffect, useState } from "react";

type Props = {
    words: string[];
}

export default function DefList({ words }: Props) {
    // send a request for each word. async.

    // each word with a loading sign next to it, then that sign gets replaced with the def.

    // my state needs to be an array of defs
    const [defList, setDefList] = useState<string[]>(Array(words.length).fill('Loading...'))

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all(words.map((x, i) =>
                fetch('/api/define', {method: 'POST', body: words[i]})
                .then(res => res.text())
                .then(data => {
                    setDefList(prevDefList => {
                        const newDefList = Array.from(prevDefList)
                        newDefList[i] = data
                        return newDefList
                    })
                })  

            ))
        }
 
        fetchData()
    }, [])

    return (
        <div>
            {defList.map((def, index) => (
                <div key={index}>
                    <p>{words[index]}: {def}</p>
                </div>
            ))}
        </div>
    )
}