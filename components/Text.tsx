type Props = {
    text: string;
    defMap: Map<string, string>;
}

export default function Text({text, defMap}: Props) {

    function handleClick(word: string) {
        alert(defMap.get(word))
    }

    const words = text.split(' ').map((word, index) => {
        return <span key={index} className="rounded-lg hover:bg-blue-500 hover:text-white"onClick={() => handleClick(word)}>{word}&nbsp;</span>
    })

    return (
        <p className="text-4xl">
            {words}
        </p>
    )
}