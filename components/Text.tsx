export default function Text({text}: {text: string}) {

    function handleClick(word: string) {
        alert(word.toUpperCase())
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