'use client'

import Definition from '@/components/Definition'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'

export default function Home() {

  const text = "한 날, 작은 마을에 어느 무서운 고양이가 나타났어요. 그 고양이는 검은 "

  const [defMap, setDefMap] = useState(new Map())

  // last clicked word

  const [selectedWord, setSelectedWord] = useState('')

  const handleClick = (word: string) => {
    setSelectedWord(word + ' ' + defMap.get(word))
  }

  // make fetch to create defMap
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api', {method: 'POST', body: text});
        const jsonData = await response.json();
        setDefMap(new Map(Object.entries(jsonData)));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
  }, [])


  return (
    <div className="flex flex-col w-1/2 mx-auto h-screen">
      <h1 className="text-blue-500">Graded Korean!</h1>
      <Text text={text} defMap={defMap} handleClick={handleClick}/>
      <Definition def={selectedWord}/>
    </div>
  )
}