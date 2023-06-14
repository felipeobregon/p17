type Props = {
    def: string;
}

export default function Definition({def}: Props) {
    return (
        <>
            <p className="text-2xl">{def}</p>
        </>
    )
}