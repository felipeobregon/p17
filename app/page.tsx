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
  const [isLoadingText, setIsLoadingText] = useState<boolean>(false)

  // last clicked word

  const [selectedWord, setSelectedWord] = useState('')

  const handleClick = (word: string) => {
    setSelectedWord(word)
  }

  // make fetch to create defMap
  useEffect(() => {
    const fetchData = async () => {
      const newMap = await createList(storyText)

      // createList call might fail, you have to handle that

      setDefMap(newMap)
    }

    if (storyText)
      fetchData()
  }, [storyText])

  const handlePrompt = (prompt: string) => {
    console.log(prompt)

    const fetchData = async () => {
      setIsLoadingText(true)
      const story = await getStory(prompt)
      setIsLoadingText(false)
      setStoryText(story)
    }
    fetchData()
  }

  
  const selectedDef = defMap.get(selectedWord)
  const displayDef = selectedDef == undefined ? 'none' : selectedDef


  return (
    <div className="flex flex-col max-w-2xl mx-auto h-screen">
      <h1 className="text-blue-500">Graded Korean!</h1>
      <SideMenu />
      <div>
        <Prompt handleClick={handlePrompt}/>
        <Text loading={isLoadingText} text={storyText} handleClick={handleClick} />
        <Definition word={selectedWord} def={displayDef}/>
      </div>
    </div>
  )
}