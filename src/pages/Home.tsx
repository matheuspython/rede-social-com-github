import React, {useContext} from 'react'
import { Header } from '../components/Header/Index';
import { CreatorOfNews } from '../components/CreatorOfNews'
import { PostList } from '../components/PostList';
import context from '../contexts/NameContext'
export const Home:React.FC = () => {
  const {state} = useContext(context)
  console.log(state)
  return (
    <div className="App">
      <Header userName={state.name} />
      <div className="container">
        <CreatorOfNews />
        <PostList />
      </div>
    </div>
  )
}
