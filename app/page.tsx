'use client'

import DefList from '@/components/DefList'
import Definition from '@/components/Definition'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import createList from '@/lib/create-list'

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
      const newMap = await createList(text.split(' '))

      setDefMap(newMap)
    }

    fetchData()
  }, [])


  return (
    <div className="flex flex-col w-1/2 mx-auto h-screen">
      <h1 className="text-blue-500">Graded Korean!</h1>
      <Text text={text} defMap={defMap} handleClick={handleClick}/>
      {defMap.size == 0 && <ReactLoading/>}
      <button className="bg-pink-100">Create new story</button>
      <Definition def={selectedWord}/>
      <DefList words={text.split(' ')}/>
    </div>
  )
}