type Props = {
    text: string;
    defMap: Map<string, string>;
    handleClick: (word: string) => void
}

export default function Text({ text, defMap, handleClick }: Props) {

    const words = text.split(' ').map((word, index) => {
        return <span key={index}
            className="rounded-lg hover:bg-blue-500 hover:text-white"
            onClick={() => handleClick(word)}>{word}</span>
    })

    return (
        <p className="text-4xl break-words">
            {words}
        </p>
    )
}