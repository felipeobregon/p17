export default async function fetchData() {
    const res = await fetch('/api/default-story')

    const text = await res.json()

    return text
}
