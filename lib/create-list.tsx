

export default async function fetchDefinition(text: string) {
    const res = await fetch('/api/definitions', {method: 'POST', body: text})

    const data = await res.json()

    return new Map<string,string>(Object.entries(data))
}


export async function fetchDefineList(words: string[]) {
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
