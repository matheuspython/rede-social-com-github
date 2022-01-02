import React from 'react'
import { Header } from '../components/Header/Index';
import { CreatorOfNews } from '../components/CreatorOfNews'
import { PostList } from '../components/PostList';
export const Home:React.FC = () => {

  return (
    <div className="App">
      <Header userName='Matheus' />
      <div className="container">
        <CreatorOfNews />
        <PostList />
      </div>
    </div>
  )
}
