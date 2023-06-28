export default async function defaultStory(word: string): Promise<string> {
    const res = await fetch('/api/default-story')

    const data = await res.json()

    return data.story
}

async function generateStory(prompt: string) {
    const res = await fetch('/api/generate-story', {method: 'POST', body: prompt})

    const data = await res.json()

    return data.story
}
