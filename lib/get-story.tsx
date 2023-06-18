export default async function fetchData() {
    const res = await fetch('/api/generate-story', {method: 'POST', body: ''})

    const text = await res.json()

    return text
}
