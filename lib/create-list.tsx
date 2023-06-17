export default async function fetchData(words: string[]) {
    const defMap = new Map<string, string>()

    await Promise.all(words.map(word =>
        fetch('/api/define', {method: 'POST', body: word})
        .then(res => res.json())
        .then(data => {
            defMap.set(word, data.definition)
        })  

    ))

    return defMap
}
