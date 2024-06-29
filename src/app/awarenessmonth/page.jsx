import ArtilceContainer from '@/components/article/ArticleContaner'
import AwarenessCard from '@/components/awareness-month/AwarenessCard'
import { useGetArticlesQuery } from '@/store/features/article/articleSlice'
import React from 'react'

const page = () => {
  
  return (
    <>
    <ArtilceContainer />
    </>
  )
}

export default page