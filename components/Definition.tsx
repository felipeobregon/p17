type Props = {
    word: string;
    def: string;
}

export default function Definition({word, def}: Props) {
    return (
        <>
            <p className="text-2xl fixed top-0 right-0 border-4 border-gray-200 rounded-2xl p-4 mx-2"><span className="font-bold">{word}</span>: {def}</p>
        </>
    )
}