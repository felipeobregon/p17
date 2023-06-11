type Props = {
    text: string;
    defMap: Map<string, string>;
}

export default function Text({text, defMap}: Props) {

    function handleClick(word: string) {
        alert(defMap.get(word))
    }

    const words = text.split(' ').map(word => {
        return <span onClick={() => handleClick(word)}>{word}</span>
    })

    return (
        <>
            {words}
        </>
    )
}