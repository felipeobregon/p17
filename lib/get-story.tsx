async function defaultStory(word: string) {
    const res = await fetch('/api/default-story')

    const text = await res.json()

    return text
}


export default async function generateStory(prompt: string) {
    const res = await fetch('/api/generate-story', {method: 'POST', body: prompt})

    const data = await res.json()

    return data.story
}
