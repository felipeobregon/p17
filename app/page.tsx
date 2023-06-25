'use client'

import DefList from '@/components/DefList'
import Definition from '@/components/Definition'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import createList from '@/lib/create-list'
import getStory from '@/lib/get-story'
import SideMenu from '@/components/SideMenu'
import Prompt from '@/components/Prompt'

export default function Home() {

  const [storyText, setStoryText] = useState<string>('')
  const [defMap, setDefMap] = useState(new Map())

  // last clicked word

  const [selectedWord, setSelectedWord] = useState('')

  const handleClick = (word: string) => {
    setSelectedWord(word)
  }

  // make fetch to create defMap
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const newMap = await createList(storyText.split(' '))

  //     setDefMap(newMap)
  //   }

  //   fetchData()
  // }, [storyText])

  const handlePrompt = (prompt: string) => {
    console.log(prompt)

    const fetchData = async () => {

      const story = await getStory(prompt)
      setStoryText(story)
    }
    fetchData()
  }

  return (
    <div className="flex flex-col max-w-2xl mx-auto h-screen">
      <h1 className="text-blue-500">Graded Korean!</h1>
      <SideMenu />
      <div>
        <Prompt handleClick={handlePrompt}/>
        <Text text={storyText} handleClick={handleClick} />
        <Definition word={selectedWord} def={defMap.get(selectedWord)}/>
      </div>
    </div>
  )
}