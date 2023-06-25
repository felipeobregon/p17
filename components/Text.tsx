import { Card } from "antd";

type Props = {
    text: string;
    loading: boolean;
    handleClick: (word: string) => void
}

export default function Text({ text, loading, handleClick }: Props) {
    if (loading) {
        return <Card loading={true}></Card>

    } else {
        const words = text.split(' ').map((word, index) => {
            return <span key={index}
                className="rounded-lg hover:bg-blue-500 hover:text-white"
                onClick={() => handleClick(word)}>{word} </span>
        })

        return (
            <p className="border-8  rounded-lg text-2xl font-serif break-words">
                {words}
            </p>
        )
    }
}