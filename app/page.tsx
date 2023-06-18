'use client'

import DefList from '@/components/DefList'
import Definition from '@/components/Definition'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import createList from '@/lib/create-list'
import getStory from '@/lib/get-story'

export default function Home() {

  const [storyText, setStoryText] = useState<string>('')
  const [defMap, setDefMap] = useState(new Map())

  // last clicked word

  const [selectedWord, setSelectedWord] = useState('')

  const handleClick = (word: string) => {
    setSelectedWord(word)
  }

  // make fetch to create defMap
  useEffect(() => {
    const fetchData = async () => {
      const newMap = await createList(storyText.split(' '))

      setDefMap(newMap)
    }

    fetchData()
  }, [storyText])


  // load storyText
  useEffect(() => {
    const fetchData = async () => {
      const res = await getStory()
      setStoryText(res.story)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col max-w-2xl mx-auto h-screen">
      <h1 className="text-blue-500">Graded Korean!</h1>
      <Text text={storyText} defMap={defMap} handleClick={handleClick} />
      {defMap.size == 0 && <ReactLoading />}
      <button className="bg-pink-100">Create new story</button>
      <Definition word={selectedWord} def={defMap.get(selectedWord)}/>
    </div>
  )
}