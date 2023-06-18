type Props = {
    word: string;
    def: string;
}

export default function Definition({word, def}: Props) {
    return (
        <>
            <p className="text-2xl"><span className="font-bold">{word}</span>: {def}</p>
        </>
    )
}