'use client'

import Text from '@/components/Text'
import { useEffect, useState } from 'react'

export default function Home() {

  const text = "한 날, 작은 마을에 어느 무서운 고양이가 나타났어요. 그 고양이는 검은 "

  const [defMap, setDefMap] = useState(new Map())

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
    <>
      <Text text={text} defMap={defMap}/>
    </>
  )
}