type Props = {
    def: string;
}

export default function Definition({def}: Props) {
    return (
        <>
            <p>{def}</p>
        </>
    )
}